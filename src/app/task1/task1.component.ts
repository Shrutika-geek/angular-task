import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
 pass1:string ="";
 pass2:string ="";
 strong:boolean=false;
 weak:boolean=false;

 task1(){
    if(this.pass1 <= 'a' || this.pass1 >='z' &&
      this.pass1 <='A' || this.pass1 >='Z' &&
      this.pass1 >= '0' || this.pass1 <= '9' &&
      this.pass1=='@' || this.pass1=='$' ||
      this.pass1=='.' || this.pass1=='_' ){
        this.strong=true;
        this.weak=false;
      }
    else{
    this.strong=false;
    this.weak=true;
  }

  if(this.pass1.length >= 8){
    this.strong=true;
    this.weak=false;

  }else{
    this.strong=false;
    this.weak=true;

  }
 }
}
