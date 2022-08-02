import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { take } from 'rxjs';

@Component({
  selector: 'site-image-process-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public list: any = [];
  site = '';
  constructor(private socket: Socket, private http: HttpClient) {}

  ngOnInit() {
    this.receiveData().subscribe((message: any) => {
      if (message) {
        this.list = [message, ...this.list];
      }
    });

    this.getAllImage()
      .pipe(take(1))
      .subscribe((data: any) => {
        if (data) {
          this.list = [...data];
        }
      });
  }

  receiveData() {
    return this.socket.fromEvent('onAdd');
  }

  getAllImage() {
    return this.http.get(`${environment.url}/`);
  }

  processImage() {
    this.http
      .post(`${environment.url}/process`, { url: this.site })
      .subscribe((resultado) => console.log(resultado));
  }
}
