import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from '../staff';
import { StaffServiceService } from '../staff-service.service';


@Component({
  selector: 'app-staffedit',
  templateUrl: './staffedit.component.html',
  styleUrls: ['./staffedit.component.scss']
})
export class StaffeditComponent implements OnInit {
  errSms: string = "";

  constructor(private activeRouter: ActivatedRoute, private router: Router, private service: StaffServiceService) { }
  staff: Staff;
  id: number;
  ngOnInit(): void {
    this.staff = new Staff();
    this.id = this.activeRouter.snapshot.params['id'];
    this.service.getOneStaff(this.id).subscribe(
      data => {
        this.staff = data;
      }
    );
  }

  updateStaff() {
    let stafName = this.staff.staffName;
    let staffPhn = this.staff.staffPhoneNumber;
    let staffEmail = this.staff.staffEmailId;
    const regex = new RegExp('^[+][0-9-]+$'),
      testPhn = regex.test(staffPhn);
    const regexEmail = new RegExp('^[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-z0-9-.]+$'),
      testEmail = regexEmail.test(staffEmail);

    if ('' + stafName == null || testPhn == false || testEmail == false) {
      this.errSms = "Please Fill all the filed";

    }
    else {
      this.errSms = "";
      this.service.updateStaff(this.staff).subscribe(data => {
        console.log("Data" + data),
          this.router.navigate(["/all-staff"]);
      });
    }

  }

}


