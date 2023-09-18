import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './component/car/car.component';
import { CarAddComponent } from './component/car-add/car-add.component';

const routes: Routes = [
  {path:"",pathMatch:'full',component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent },
  {path:"cars/add", component:CarAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
    

export class AppRoutingModule { }
