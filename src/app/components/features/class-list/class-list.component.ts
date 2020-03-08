import { SchoolService } from './../../../_services/school.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { School } from 'src/app/_models/school';
import { Class } from 'src/app/_models/classes';


@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  bsModalRef: BsModalRef;
  // showaddcomponent:boolean = false;
  classes:Class[];
  schoolslist:School[]=[];
  searchTxt:string;
 
  constructor(private modalService: BsModalService , private schoolsevice:SchoolService) { }
 

  ngOnInit(): void {
    this.classes = this.schoolsevice.getClasses();

    this.schoolsevice.onSchoolsChanged.subscribe((isChanged) => {
      if(isChanged !== null){
        this.classes = this.schoolsevice.getClasses();
      }
    });
    
    this.schoolslist= this.schoolsevice.getschools();
  }

  openModalWithComponent(formType){
    const initialState = {
      scoolslist: []=this.schoolslist,
      title: 'Add Classes',
      formType: formType
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {
      initialState: initialState,
      backdrop : 'static',
      keyboard : false
    });
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  
  searchByName(){
    this.classes = this.schoolsevice.search(this.searchTxt);
  }
  

}
