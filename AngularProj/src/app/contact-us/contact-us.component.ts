import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  serverResponse: String;
  personalDetails = { FirstName: '', LastName: '', Email: '', Comment: '' };
  check: boolean = true;

  constructor(private location: Location, private _http: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showError() {
    this.check = false;
    this.toastr.error('Hello world!', 'Toastr fun!');
  }

  showWarning() {
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }

  onClick() {

    if (this.personalDetails.FirstName.length < 3 ||
      this.personalDetails.LastName.length < 3 || this.personalDetails.Email.length < 2
      || this.personalDetails.Comment.length < 2) {
      this.toastr.info("Must fill in the empty fields");
      return;
    }
    let url: string = 'http://localhost:52864/api/ContactUs';
    let body = this.personalDetails;

    this._http.post(url, body).subscribe(res => {
      this.serverResponse = res.toString();
    });

    if (confirm("The details were successfully integrated into the system. Thank you and goodbye :):)"
      + "\n\n" + "You are returned to the home page")) {
      this.location.back();
    }
  }


  goBack(): void {
    this.location.back();
  }
}
