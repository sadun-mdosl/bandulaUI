import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from "./personal-details/personal-details.component";
import { HomeComponent } from "./home/home.component";
import { PrintRegisterationComponent} from "./print-registeration/print-registeration.component";
import {RegistrationBillComponent} from "./registration-bill/registration-bill.component";
import {ViewCustomerComponent} from "./view-customer/view-customer.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin/addNew',component:PersonalDetailsComponent},
  {path:'admin/addNew/printNewCustomer',component:RegistrationBillComponent},
  // {path:'admin/addNew/printNewCustomer',component:PrintRegisterationComponent}
  {path:'admin/api/nic', component:ViewCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
