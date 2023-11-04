import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
