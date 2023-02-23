import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  @Input()
  myinputMsg!: string;
  @Output() myoutput : EventEmitter<string> = new EventEmitter();
  outputMessage:string="i'm child component!!!!!!!!!!!!"
  constructor(){}

  ngOnInit(): void {
      console.log(this.myinputMsg);
  }

  sendValues(){
    this.myoutput.emit(this.outputMessage);
  }
}
