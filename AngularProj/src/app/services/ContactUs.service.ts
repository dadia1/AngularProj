import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactUsService {

  serverResponse: String;
  constructor(private _http: HttpClient) { }

  contactUs() {
    debugger;
    let personalDetails = { FirstName: "aaaa", LastName: "bbbb", Email: "cccc", Comment: "dddd" };
    let url: string = 'http://localhost:52864/api/ContactUs';
    let body = personalDetails;

    this._http.post(url, body).subscribe(res => {
      this.serverResponse = res.toString();
    });
  }


  //contactUs(messageContent: any) {
  //  return this.http.post(this.url,
  //    JSON.stringify(messageContent),
  //    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  //}
}
