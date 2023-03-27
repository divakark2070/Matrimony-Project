import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessplansComponent } from './businessplans/businessplans.component';
import { DistrictsComponent } from './districts/districts.component';
import { LandingComponent } from './landing.component';
import { StatesComponent } from './states/states.component';
import { TalukasComponent } from './talukas/talukas.component';
import { TownsComponent } from './towns/towns.component';

const routes: Routes = [
  {path:"",component:LandingComponent, children:[
    {path:"businessplans",component:BusinessplansComponent},
    {path:"states",component:StatesComponent},
    {path:"districts/:stateid",component:DistrictsComponent},
    {path:"talukas/:districtid",component:TalukasComponent},
    {path:"towns/:talukaid",component:TownsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
