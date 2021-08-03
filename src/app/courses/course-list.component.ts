import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular',
        imageUrl: '/assets/images/forms.png',
        price: 99.09,
        code: 'PASSCODE',
        duration: 120,
        rating: 4.5,
        releaseDate: '3 de Agosto de 2021'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/http.png',
        price: 45.09,
        code: 'PASSCODE 01',
        duration: 80,
        rating: 5.4,
        releaseDate: '5 de Agosto de 2021'
      }
    ]
  }

}