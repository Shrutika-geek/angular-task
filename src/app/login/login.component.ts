import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userName:string='';
    password:string="";
    loginSuccess=false;
    loginFailed=false;
    login(){
      this.loginFailed=this.loginSuccess=false;
      if(this.userName=="admin"  && this.password =="admin@123"){
        this.loginSuccess=true;
      }else{
        this.loginFailed=true;
      }
    }
    courses:any[]=[
      {id:1, name:"subj1"},
      {id:2, name:"subj2"},
      {id:3, name:"subj3"},
      {id:4, name:"subj4"},
    ];

}

