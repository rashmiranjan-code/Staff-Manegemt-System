import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from './staff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {


  constructor(private http: HttpClient) {

  }

  private baseUrl: string = 'http://localhost:8081/api/staff/retrive/staffById';
  private baseUrl1: string = 'http://localhost:8081/api/staff';
  public doRegistration(staff: Staff) {
    return this.http.post("http://localhost:8081/api/staff/save", staff, { responseType: "text" as "json" });
  }
  public getStaffs() {
    return this.http.get("http://localhost:8081/api/staff/retrive");
  }
  public deleteStaff(staffId: any) {
    return this.http.delete("http://localhost:8081/api/staff/delete/" + staffId);
  }

  getOneStaff(id: number): Observable<Staff> {
    return this.http.get<Staff>(`${this.baseUrl}/${id}`);
  }
  updateStaff(staff: Staff): Observable<String> {
    return this.http.put<String>(`${this.baseUrl1}/update`, staff, { responseType: "text" as "json" });

  }
}
