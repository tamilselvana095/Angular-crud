import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './crud/add/add.component';
import { UpdateComponent } from './crud/update/update.component';

import { GetComponent } from './crud/get/get.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path:'add',component:AddComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'getlist',component:GetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
