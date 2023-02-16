import { Component, OnInit} from '@angular/core';
import {person} from './data-b'


@Component({
  selector: 'app-data-b',
  templateUrl: './data-b.component.html',
  styleUrls: ['./data-b.component.css']
})
export class DataBComponent implements OnInit {
    
 currName:person = new person();

  title:string=" ";
  constructor(){}
  ngOnInit(): void {
      
  }

}
