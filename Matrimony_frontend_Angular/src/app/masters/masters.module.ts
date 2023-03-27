import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { LandingComponent } from './landing.component';
import { BusinessplansComponent } from './businessplans/businessplans.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatesComponent } from './states/states.component';
import { DistrictsComponent } from './districts/districts.component';
import { RouterModule } from '@angular/router';
import { TalukasComponent } from './talukas/talukas.component';
import { TownsComponent } from './towns/towns.component';


@NgModule({
  declarations: [
    LandingComponent,
    BusinessplansComponent,
    StatesComponent,
    DistrictsComponent,
    TalukasComponent,
    TownsComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class MastersModule { }
