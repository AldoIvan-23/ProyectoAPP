import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsPage } from './jobs.page';

const routes: Routes = [
  {
    path: '',
    component: JobsPage
  },
  {
    path: '../tabs/Inicio',
    loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsPageRoutingModule {}
