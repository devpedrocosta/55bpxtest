/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, Logger } from '@nestjs/common';
import { WSService } from './ socket-client';
import * as request from 'request';
import * as fs from 'fs';
import { OrdersRepository } from './repository/repository';
import { CreateOrderRequest } from './dto/create-order.request';
@Injectable()
export class RabqServiceService {
  private readonly logger = new Logger(RabqServiceService.name);

  constructor(private wsservice: WSService, private readonly ordersRepository: OrdersRepository,) { }


  async createProcessJob(data: any) {

    await this.createOrder(data);
   // this.wsservice.send(JSON.stringify(data));
  }

  download(uri, filename, callback) {
    const upload_dir = __dirname + '/../../uploads';
    console.log(fs.existsSync(upload_dir));
    if (!fs.existsSync(upload_dir)) {
      fs.mkdirSync(upload_dir);
    }

    // request.head(uri, function (err, res, body) {
    //   request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    // });
  }

  async createOrder(req) {
    const session = await this.ordersRepository.startTransaction();
    try {

      const data = {
        url: req.item.site + req.item.default_url,
        process_date: req.item.process_date,
        default_url: req.item.default_url,
        site: req.item.site
      }
      
      const order = await this.ordersRepository.create(
        data, { session });
      this.download(
        request.url,
        request.default_url,
        function () {
          console.log('done');
        },
      );
      await session.commitTransaction();
      return order;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    }
  }
}
