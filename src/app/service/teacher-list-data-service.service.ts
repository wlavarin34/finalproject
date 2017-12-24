import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherListDataServiceService {
  teachers: Teacher[];
    constructor(public http:Http) { 
    }

  getTeachers(){
    return this.http.get('http://localhost:8016/api/v1/teachers')
      .map( response => response.json());
  } 
}

export interface Teacher {
  teacherId: string,
  name:string,
  lastname: string,
  title: string,
  age: number,
  isFullTime: boolean,
  updatedOn:string
}


