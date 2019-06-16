import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {RegisterComponent} from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {VerifyEmailComponent} from './components/verify-email/verify-email.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../general/material.module';


@NgModule({
  declarations: [LoginComponent, ProfileComponent, RegisterComponent,  VerifyEmailComponent],
  imports: [
    CommonModule,
      ReactiveFormsModule,
      RouterModule,
      MaterialModule
  ]
})
export class AuthenticationModule { }
