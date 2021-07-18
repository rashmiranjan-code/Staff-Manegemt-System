import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffServiceService } from '../staff-service.service';

@Component({
  selector: 'app-all-staffs',
  templateUrl: './all-staffs.component.html',
  styleUrls: ['./all-staffs.component.scss']
})
export class AllStaffsComponent implements OnInit {
  staffs: any;

  constructor(private service: StaffServiceService, private router: Router) { }

  ngOnInit() {
    let response = this.service.getStaffs();
    response.subscribe(data => this.staffs = data);

  }
  public removeStaff(staffId: string) {
    let response = this.service.deleteStaff(staffId);
    response.subscribe(
      data => this.staffs = data);
    let response1 = this.service.getStaffs();
    response1.subscribe(data => this.staffs = data);
  }

  updateRecord(id: number) {
    this.router.navigate(["staffEdit", id]);
  }

}
