import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpmePageRoutingModule } from './helpme-routing.module';

import { HelpmePage } from './helpme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpmePageRoutingModule
  ],
  declarations: [HelpmePage]
})
export class HelpmePageModule {}
