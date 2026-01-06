import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/firstComponent.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MultiplyPipe } from './multiply.pipe';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { FifthComponentComponent } from './fifth-component/fifth-component.component';
import { FormsModule } from '@angular/forms';
import { SixtComponentComponent } from './sixt-component/sixt-component.component';
import { SeventhComponentComponent } from './seventh-component/seventh-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    MultiplyPipe,
    ThirdComponentComponent,
    FourthComponentComponent,
    FifthComponentComponent,
    SixtComponentComponent,
    SeventhComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
