/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, Logger } from '@nestjs/common';
import { WSService } from './ socket-client';
import * as request from 'request';
import * as fs from 'fs';
const http = require('http');

@Injectable()
export class RabqServiceService {
  private readonly logger = new Logger(RabqServiceService.name);

  constructor(private wsservice: WSService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createProcessJob(data: any) {
    // await this.download(
    //   'https://www.google.com/images/srpr/logo3w.png',
    //   './images/google.png',
    //   function () {
    //     console.log('done');
    //   },
    // );

    console.log(this.wsservice.getIsConnect());
    this.wsservice.send(JSON.stringify(data));
  }

  download(uri, filename, callback) {
    const upload_dir = __dirname + '/../../uploads';
    console.log(fs.existsSync(upload_dir));
    if (!fs.existsSync(upload_dir)) {
      fs.mkdirSync(upload_dir);
    }

    request.head(uri, function (err, res, body) {
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  }
}
