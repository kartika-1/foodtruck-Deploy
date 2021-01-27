import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckListComponent } from './truck-list/truck-list.component';


const routes: Routes = [

  {path:"TruckList" ,component:TruckListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
           
        ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
