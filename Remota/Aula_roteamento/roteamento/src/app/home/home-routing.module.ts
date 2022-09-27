import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    
  },
  {
    path: 'test',
    loadChildren: () => import('../test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'helpme',
    loadChildren: () => import('../helpme/helpme.module').then( m => m.HelpmePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
