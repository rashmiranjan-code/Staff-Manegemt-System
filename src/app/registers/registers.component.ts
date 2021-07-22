import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { StaffServiceService } from '../staff-service.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent implements OnInit {

  staff: Staff = new Staff();
  message: any;
  errSms: string = "";

  constructor(private service: StaffServiceService) { }

  ngOnInit() {
  }

  public registerNow(login: NgForm) {
    let stafId: number = this.staff.staffId;

    let stafName = this.staff.staffName;
    let staffPhn = this.staff.staffPhoneNumber;
    let staffEmail = this.staff.staffEmailId;
    const regex = new RegExp('^[+][0-9-]+$'),
      testPhn = regex.test(staffPhn);
    const regexEmail = new RegExp('^[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-z0-9-.]+$'),
      testEmail = regexEmail.test(staffEmail);

    if ('' + stafId == null || stafName == null || testPhn == false || testEmail == false) {
      this.errSms = "Please Fill all the filed";
    } else {
      this.errSms = "";
      let reponse = this.service.doRegistration(this.staff);
      reponse.subscribe(data => {
        this.message = data;
        login.reset();
      });
    }
  }
}
