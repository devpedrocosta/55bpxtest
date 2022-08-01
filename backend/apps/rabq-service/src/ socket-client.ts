import { Injectable } from '@nestjs/common';
import * as WebSocket from 'ws';
import { timer } from 'rxjs';

@Injectable()
export class WSService {
  private ws: WebSocket;
  private isConnect = false;

  constructor() {
    this.connect();
  }
  connect() {
    this.ws = new WebSocket('wss://socketsbay.com/wss/v2/2/demo/');
    this.ws.on('open', () => {
      this.isConnect = true;
    });

    this.ws.on('error', (message) => {
      this.ws.close();
      this.isConnect = false;
    });

    this.ws.on('close', (message) => {
      timer(1000).subscribe(() => {
        this.isConnect = false;
        this.connect();
      });
    });

    this.ws.on('message', (message) => {
      //handler
    });
  }

  send(data: any) {
    console.log(data);
    this.ws.send(data);
  }

  getIsConnect() {
    return this.isConnect;
  }
}
