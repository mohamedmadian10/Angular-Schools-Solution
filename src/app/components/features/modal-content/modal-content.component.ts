import { ClassListComponent } from './../class-list/class-list.component';
import { SchoolService } from 'src/app/_services/school.service';
import { Class } from "src/app/_models/classes";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { School } from "src/app/_models/school";

interface Event {
  name: string;
  value: any;
}
@Component({
  selector: "app-modal-content",
  templateUrl: "./modal-content.component.html",
  styleUrls: ["./modal-content.component.css"],
  
})
export class ModalContentComponent implements OnInit {
  title: string;
  closeBtnName: string;
  scoolslist: School[] = [];
  formType: string;
  selected: boolean = false;
  addOrEditForm: FormGroup;
  selectedSchoolId: number;

  constructor(public bsModalRef: BsModalRef, private schoolService: SchoolService) {}

  ngOnInit(): void {
    console.log(this.scoolslist);
  }

  changetitle() {
    this.title = "Edit Classes";
  }

  onSchoolSelected(selectedSchool) {
    this.changetitle()
    this.selectedSchoolId = selectedSchool._id;

    if (this.formType === 'add') {

      this.addOrEditForm = new FormGroup({
        Classes: new FormArray([
          new FormGroup({
            name: new FormControl("", [
              Validators.required,
              Validators.maxLength(40)
            ]),
            section: new FormControl("", [
              Validators.maxLength(3),
              Validators.required
            ]),
            grade: new FormControl("")
          })
        ])
      });
    }else{
      this.changetitle();    
      let ClassesToEdit = this.schoolService.getClassesOfSchoolById(this.selectedSchoolId);
      
      this.addOrEditForm = new FormGroup({
        Classes: new FormArray([])
      });
      
      let classesFormArray = <FormArray>this.addOrEditForm.get("Classes");

      ClassesToEdit.forEach((classItem) => {

      classesFormArray.push(
        new FormGroup({
          name: new FormControl(classItem.name , [
            Validators.required,
            Validators.maxLength(40)
          ]),
          section: new FormControl(classItem.section, [
            Validators.maxLength(3),
            Validators.required
          ]),
          grade: new FormControl(classItem.grade)
        })
      );
      });

    }

    this.selected = true;

    console.log(this.addOrEditForm.value);
  }

  getClassesControls(){
    return (<FormArray>this.addOrEditForm.get('Classes')).controls;
  }

  getControl(control, i){
  return (<FormArray> this.addOrEditForm.get('Classes')).controls[i].get(control);
  }

  addClassControl(){
    let classesFormArray = <FormArray>this.addOrEditForm.get("Classes");

      classesFormArray.push(
        new FormGroup({
          name: new FormControl("", [
            Validators.required,
            Validators.maxLength(40)
          ]),
          section: new FormControl("", [
            Validators.maxLength(3),
            Validators.required
          ]),
          grade: new FormControl("")
        })
      );
  }

  onAddOrEditClasses(){
    console.log(this.addOrEditForm.value);
    console.log(this.selectedSchoolId);

    let selectedSchoolIndex = this.scoolslist.findIndex((school) => school._id === this.selectedSchoolId);
    if (this.formType === 'add'){
      this.schoolService.addClassesToSchool(selectedSchoolIndex, this.addOrEditForm.value.Classes);

    }else{
      this.schoolService.editClassesToSchool(selectedSchoolIndex, this.addOrEditForm.value.Classes)
    }

    this.schoolService.onSchoolsChanged.next(true);

    this.bsModalRef.hide();
        
  }

  deleteClass(i){

    let classesFormArray = <FormArray>this.addOrEditForm.get("Classes");
    
    if(classesFormArray.length > 1){
    classesFormArray.removeAt(i);
    }
  }
}
