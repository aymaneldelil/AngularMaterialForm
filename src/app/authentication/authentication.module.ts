import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule ,} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AuthenticationUIComponent } from './authentication-ui/authentication-ui.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthenticationUIComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
    ,
    
    
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    AuthenticationUIComponent

  ]
})
export class AuthenticationModule { }
