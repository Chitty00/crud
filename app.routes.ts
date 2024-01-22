import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ViewlistComponent } from '../viewlist/viewlist.component';
import { AddnewComponent } from '../addnew/addnew.component';
import { UpdatenewComponent } from '../updatenew/updatenew.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'ViewEmployee/:employeeId', component: ViewlistComponent },
  { path: 'AddEmployee', component: AddnewComponent },
  { path: 'EditEmployee/:employeeId', component: UpdatenewComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
