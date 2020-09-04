import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ForgotComponent} from './forgot/forgot.component';
import {ErrorComponent} from './error/error.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [{path:"signup",component:SignupComponent},{path:"login",component:LoginComponent},{path:'',redirectTo:'/login',pathMatch:'full'},
{
  path: 'home',
  component: HomeComponent,
  children: [{ path: 'A', component:AboutusComponent}],
},
{path:"forgot",component:ForgotComponent},{path:"**",component:ErrorComponent},
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
