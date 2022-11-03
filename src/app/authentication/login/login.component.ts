import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class LoginComponent implements OnInit {

  loginFormGroup = this._formBuilder.group({
    userNameCtrl: ['', [Validators.required, Validators.pattern((/\w+([\.-]?\w+)*@\w+(\.)(com|net|edu|org)/))]],
    userPasswordCtrl: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
