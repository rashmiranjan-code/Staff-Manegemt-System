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
    this.service.updateStaff(this.staff).subscribe(data => {
      console.log("Data" + data),
        this.router.navigate(["/all-staff"]);
    });
  }

}
