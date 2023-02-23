import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {
  courses=[
    {courseId:1,courseName:"Node JS"},
    {courseId:2,courseName:"Typescript"},
    {courseId:3,courseName:"Angular"},
    {courseId:4,courseName:"React JS"}
  ];
  @Input() cName:string='';
}
+