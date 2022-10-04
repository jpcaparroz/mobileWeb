import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpmePage } from './helpme.page';

const routes: Routes = [
  {
    path: '',
    component: HelpmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpmePageRoutingModule {}
