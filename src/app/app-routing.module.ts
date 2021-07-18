import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStaffsComponent } from './all-staffs/all-staffs.component';
import { HomeComponent } from './home/home.component';
import { RegistersComponent } from './registers/registers.component';
import { StaffeditComponent } from './staffedit/staffedit.component';

const routes: Routes = [
  {
    path: "staffEdit/:id", component: StaffeditComponent
  },

  // {
  //   path: "", redirectTo: "home"
  // },
  {
    path: "all-staff", component: AllStaffsComponent
  },
  {
    path: "register", component: RegistersComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "**", component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
