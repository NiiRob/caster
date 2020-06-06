import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyViewComponent } from './layouts/empty-view/empty-view.component';
import { MainViewComponent } from './layouts/main-view/main-view.component';


const routes: Routes = [
  {
    path: 'auth',
    component: EmptyViewComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'customers',
    component: MainViewComponent,
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
