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
  message: any = "";
  constructor(private service: StaffServiceService, private router: Router) { }

  ngOnInit() {
    this.getAllStaffs();

  }
  public removeStaff(staffId: string) {
    this.service.deleteStaff(staffId)
      .subscribe(
        (data) => {
          this.message = data;
          this.getAllStaffs();
        }, error => {
          console.log(error);
          this.getAllStaffs();
          this.message = 'Unable to delete! contact admin!!';
        });
  }

  updateRecord(id: number) {
    this.router.navigate(["staffEdit", id]);
  }
  getAllStaffs() {
    this.service.getStaffs().subscribe(
      (data) => {
        this.staffs = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
