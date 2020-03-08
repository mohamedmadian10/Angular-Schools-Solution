import { School } from "src/app/_models/school";
import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";
import { Class } from "../_models/classes";

@Injectable({
  providedIn: "root"
})
export class SchoolService {
  schools: School[] = [
    new School(1, "Cairo English School", [
      { _id: 1, name: "first class", section: "A", grade: 3 },
      { _id: 2, name: "second class", section: "B", grade: 3 },
    ]),

    new School(2, "British International School in Cairo", [
      { _id: 4, name: " class one", section: "A", grade: 3 },
      { _id: 5, name: "second class", section: "B", grade: 3 },
      { _id: 6, name: "third class", section: "C", grade: 3 }
    ]),

    new School(3, "Saint George College", [
     
      { _id: 9, name: "third class", section: "C", grade: 3 }
    ])
  ];

onSchoolsChanged = new BehaviorSubject<boolean>(null);

  getschools() {
    return this.schools;
  }

 getClasses(){

   let classes: Class[] = [];

   this.schools.forEach((school) => {
    classes = classes.concat(school.classes);
   });

   return classes;
 }

 addClassesToSchool(schoolIndex, classes){
  this.schools[schoolIndex].classes = this.schools[schoolIndex].classes.concat(classes);
 }

 getClassesOfSchoolById(id){
  return this.schools.find(school => school._id === id).classes;
 }

 search(text){
  let classes = this.getClasses();
  let searchedClasses = [];

  classes.forEach((classItem) => {
    if(classItem.name.includes(text)){
      searchedClasses.push(classItem);
    }
  });

  return searchedClasses;
 }
}
