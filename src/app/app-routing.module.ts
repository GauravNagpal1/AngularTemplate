import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderFooterLayoutComponent } from './layout/header-footer-layout/header-footer-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
  path: 'login', component: HeaderFooterLayoutComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  }
  // { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
