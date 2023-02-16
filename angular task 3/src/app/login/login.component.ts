import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import {Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerForm!:FormGroup
  title='formvalidations';
  submitted=false;

  // constructor(private formBuilder : FormBuilder ){ }

  ngOnInit(){

    this.registerForm = FormBuilder.Group({
      first:['',Validators.required]
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    alert("success")
  }
}
