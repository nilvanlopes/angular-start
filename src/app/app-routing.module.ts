import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/firstComponent.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { TwelftComponentComponent } from './twelft-component/twelft-component.component';
import { ThirteenthComponentComponent } from './thirteenth-component/thirteenth-component.component';
import { FourteenthComponentComponent } from './fourteenth-component/fourteenth-component.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './fourteenth-component/login/login.component';

const routes: Routes = [
  { path: '1', component: FirstComponentComponent },
  { path: '2', component: SecondComponentComponent },
  { path: '3', component: ThirdComponentComponent },
  { path: '4', component: FourthComponentComponent },
  { path: '13/:id', component: ThirteenthComponentComponent },
  {
    path: '14',
    component: FourteenthComponentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '3', pathMatch: 'full' },
  { path: '**', component: TwelftComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
