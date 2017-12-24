import { Component, OnInit } from '@angular/core';
import { TeacherListDataServiceService } from '../../service/teacher-list-data-service.service';
import { Teacher }  from '../../service/teacher-list-data-service.service';  
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[];
  isToDisplayTeachers: boolean = false;

  constructor(private TeacherListDataServiceService:TeacherListDataServiceService) { 
  }

  ngOnInit() {
    this.TeacherListDataServiceService.getTeachers().subscribe( (teachers) => {
      console.log(teachers);
      this.teachers = teachers;
    });
    /*this.teachers = [
      {teacherId: '1', name:'Kristen', lastname:'Pearce', title:'Title 1', age:19, isFullTime:true, updatedOn:'12/21/2017'},
      {teacherId: '2', name:'Wilkens', lastname:'Lavarin', title:'Title 2', age:19, isFullTime:false,updatedOn:'12/22/2017'},
      {teacherId: '3', name:'Ilker', lastname:'Kiris', title:'Title 3', age:35, isFullTime:true,updatedOn:'12/21/2017'},
      {teacherId: '4', name:'Wildy', lastname:'Sam', title:'Title 4', age:18, isFullTime:false,updatedOn:'12/21/2017'},
      {teacherId: '5', name:'Vlad', lastname:'Aulvimar', title:'Title 5', age:21, isFullTime:true,updatedOn:'12/21/2017'}
    ];*/
    /*if (!(this.teachers && this.teachers.length > 0)) {
      this.teachers = [
        {teacherId: '1', name:'Kristen', lastname:'Pearce', title:'Title 1', age:19, isFullTime:true,updatedOn:'12/21/2017' },
        {teacherId: '2', name:'Wilkens', lastname:'Lavarin', title:'Title 2', age:19, isFullTime:false, updatedOn:'12/22/2017'},
        {teacherId: '3', name:'Ilker', lastname:'Kiris', title:'Title 3', age:35, isFullTime:true,updatedOn:'12/21/2017'},
        {teacherId: '4', name:'Wildy', lastname:'Sam', title:'Title 4', age:18, isFullTime:false,updatedOn:'12/21/2017'},
        {teacherId: '5', name:'Vlad', lastname:'Aulvimar', title:'Title 5', age:21, isFullTime:true,updatedOn:'12/21/2017'}
      ];
  }*/


  }

  toggleToDisplayTeachers() {
    this.isToDisplayTeachers = !this.isToDisplayTeachers;
  }
}


