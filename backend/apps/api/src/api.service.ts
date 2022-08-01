/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { delay, from, mergeMap, of } from 'rxjs';
import { ApiGateway } from './api.gateway';
const cheerio = require('cheerio');
import * as request from 'request';
import { RQL_QUEE } from './dto/create-image.request';

@Injectable()
export class ApiService {
  private todos = [];
  constructor(
    private readonly todoGateway: ApiGateway,
    @Inject(RQL_QUEE) private billingClient: ClientProxy,
  ) {}

  public getTodos() {
    this.todoGateway.send('xxx');
  }

  async createOrder(data) {
    try {
      return await this.getDomainImages(data);
    } catch (err) {
      throw err;
    }
  }

  sendQuee(item) {
    this.billingClient.emit('image_processed', {
      item,
    });

    return of(this.todoGateway.send(item)).pipe(delay(2000));
  }

  async getDomainImages(data) {
    await request(data.url, async (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const allImages = this.processImageGetURL(data, body);
        from(allImages)
          .pipe(mergeMap((item) => this.sendQuee(item)))
          .subscribe();
      }
    });
  }

  processImageGetURL(data, body) {
    const $ = cheerio
      .load(body)('img')
      .toArray()
      .map((image: any) => image?.attribs?.src || '');

    return $.map((image) => {
      return {
        process_date: new Date(),
        default_url: image,
        site: data.url,
      };
    });
  }
}
