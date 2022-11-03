import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  BasicInfoFormGroup = this._formBuilder.group({
    firstCtrl: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lastCtrl: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    birthCtrl: ['', Validators.required],
    countryCtrl: ['', Validators.required],
    emailCtrl: ['', [Validators.required, Validators.pattern((/\w+([\.-]?\w+)*@\w+(\.)(com|net|edu|org)/))]],
    userNameCtrl: ['', Validators.required],
  });

  accountInfoFormGroup = this._formBuilder.group({
    emailCtrl: ['', [Validators.required, Validators.pattern((/\w+([\.-]?\w+)*@\w+(\.)(com|net|edu|org)/))]],
    userNameCtrl: ['', Validators.required],
  });

  passwordFormGroup = this._formBuilder.group({
    passwordCtrl: ['', Validators.required],
    confirmPasswordCtrl: ['', Validators.required],
  });

 joinForms:object={};



  /// Use It in HandleError Function
  firstCtrl: any = this.BasicInfoFormGroup.get(['firstCtrl']);
  lastCtrl: any = this.BasicInfoFormGroup.get(['lastCtrl']);

  emailCtrl: any = this.accountInfoFormGroup.get(['emailCtrl']);

  ////////////////////////////////////////////////////////////////////////////////

  onSubmit() {
    console.log("work");

  }

  ////////////////////////////////////////////////////////////////////////////////


  submitForm() {
    if (this.BasicInfoFormGroup.valid && this.accountInfoFormGroup.valid && this.passwordFormGroup) {
      this.joinForms =this._formBuilder.group({
        form1:this.BasicInfoFormGroup.value,
        form2:this.accountInfoFormGroup.value,
        form3:this.passwordFormGroup.value,
      })

      console.log("Work");

      console.log(this.joinForms);
      
  

    }
  }
  constructor(private _formBuilder: FormBuilder) {


  }

  ngOnInit(): void {

  }

}
