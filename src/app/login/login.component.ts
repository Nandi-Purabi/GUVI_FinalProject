import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { userList } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  allUsersList: Array<userList> = [];
  isPwdCorrect: number = 0;

  constructor(private service: ApiService, private router: Router) {
    this.userForm = new FormGroup({
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'userPwd': new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  validateUser() {
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });
    if (this.userForm.valid) {
      this.service.getLoginDetails(this.userForm.value.userEmail).subscribe(data => {
        this.allUsersList = data;
        if (this.allUsersList.length > 0) {
          if (this.allUsersList[0].userPassword === this.userForm.value.userPwd) {
            this.isPwdCorrect = 1;
            this.service.currentUserID = this.allUsersList[0].userID;
            console.log(this.service.currentUserID)
            this.router.navigate(['/home', this.service.currentUserID]);
          }
          else {
            alert("Wrong Password Entered!! Try Again!!");
          }
        }
        else {
          alert("This Email is Not Yet Registered!! Try Again!!")
        }
      
      });
    } 
  }
}

