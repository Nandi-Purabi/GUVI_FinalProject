import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { addUser, userList } from '../model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm:FormGroup;
  allUsersList: Array<userList> = [];
  userDetails:addUser={
    "userName": "",
    "userEmail": "",
    "userPassword": ""
  }
  constructor(private formBuilder: FormBuilder, private service:ApiService, private router:Router) { 
    this.userForm = this.formBuilder.group({
      'userName': new FormControl('', [Validators.required]),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'userPwd': new FormControl('', [Validators.required,Validators.minLength(8)]),
      'confirmPwd': new FormControl('', [Validators.required])
    },
    {
      validators: this.passwordValidator('userPwd','confirmPwd')
    });
  }

  ngOnInit(): void {
  }
  passwordValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.passwordValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ passwordValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
  submitUser() {
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.getLoginDetails(this.userForm.value.userEmail).subscribe(data => {
        this.allUsersList = data;
        if (this.allUsersList.length > 0) {
          alert("Email Already Registered!!")
        }
        if(this.allUsersList.length==0)
        {
          this.userDetails.userEmail=this.userForm.value.userEmail;
      this.userDetails.userName=this.userForm.value.userName;
      this.userDetails.userPassword=this.userForm.value.userPwd;
      this.service.addUser(this.userDetails).subscribe(() => {
       alert("User Registered Successfully!!")
       this.router.navigate(['']);
      },() => {
        alert("Something Went Wrong. Try Again Later!!");
      })
        }
      });
      
      
    }
  }
}
