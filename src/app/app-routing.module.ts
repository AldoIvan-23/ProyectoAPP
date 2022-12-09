import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then( m => m.JobsPageModule)
  },
  {
    path: 'job1',
    loadChildren: () => import('./job1/job1.module').then( m => m.Job1PageModule)
  },
  {
    path: 'job2',
    loadChildren: () => import('./job2/job2.module').then( m => m.Job2PageModule)
  },
  {
    path: 'job3',
    loadChildren: () => import('./job3/job3.module').then( m => m.Job3PageModule)
  },
  {
    path: 'job4',
    loadChildren: () => import('./job4/job4.module').then( m => m.Job4PageModule)
  },
  {
    path: 'categoria1',
    loadChildren: () => import('./categoria1/categoria1.module').then( m => m.Categoria1PageModule)
  },
  {
    path: 'categoria2',
    loadChildren: () => import('./categoria2/categoria2.module').then( m => m.Categoria2PageModule)
  },
  {
    path: 'categoria3',
    loadChildren: () => import('./categoria3/categoria3.module').then( m => m.Categoria3PageModule)
  },
  {
    path: 'categoria4',
    loadChildren: () => import('./categoria4/categoria4.module').then( m => m.Categoria4PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
