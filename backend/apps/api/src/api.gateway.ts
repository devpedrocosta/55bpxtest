import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
@WebSocketGateway({ cors: true })
export class ApiGateway {
  @WebSocketServer() server;

  send(data) {
    this.server.emit('onAdd', data);
  }
}
