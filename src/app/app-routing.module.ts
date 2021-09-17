import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHandbookComponent } from './core/pages/add-handbook/add-handbook.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'handbook',
    pathMatch: 'full',
  },
  {
    path: 'handbook',
    component: AddHandbookComponent,
  },
  {
    path: 'analytics',
    component: AddHandbookComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
