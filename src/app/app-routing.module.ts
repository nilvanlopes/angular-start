import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/firstComponent.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';

const routes: Routes = [
  { path: '1', component: FirstComponentComponent },
  { path: '2', component: SecondComponentComponent },
  { path: '3', component: ThirdComponentComponent },
  { path: '4', component: FourthComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
