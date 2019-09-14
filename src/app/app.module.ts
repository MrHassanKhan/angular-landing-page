import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlanspageComponent } from './planspage/planspage.component';
import { CardpageComponent } from './cardpage/cardpage.component';
import { PrivacypolicypageComponent } from './privacypolicypage/privacypolicypage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PlanspageComponent,
    CardpageComponent,
    PrivacypolicypageComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
