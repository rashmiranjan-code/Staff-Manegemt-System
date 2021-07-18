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

  constructor(private service: StaffServiceService) { }

  ngOnInit() {
  }

  public registerNow(login: NgForm) {
    let reponse = this.service.doRegistration(this.staff);
    reponse.subscribe(data => {
      this.message = data;
      login.reset();
    });
  }

}
