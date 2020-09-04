import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ErrorComponent } from './error/error.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LogalertComponent } from './logalert/logalert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupalertComponent } from './signupalert/signupalert.component';
import { DeleteComponent } from './delete/delete.component';
import { ForgotalertComponent } from './forgotalert/forgotalert.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ForgotComponent,
    ErrorComponent,
    AboutusComponent,
    LogalertComponent,
    SignupalertComponent,
    DeleteComponent,
    ForgotalertComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
