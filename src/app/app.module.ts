import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



import { AppComponent } from './app.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HeaderComponent } from './components/core/header/header.component';
import { HeaderTopComponent } from './components/core/header/header-top/header-top.component';
import { HeaderLowerComponent } from './components/core/header/header-lower/header-lower.component';
import { ClassListComponent } from './components/features/class-list/class-list.component';
import { ModalContentComponent } from './components/features/modal-content/modal-content.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderTopComponent,
    HeaderLowerComponent,
    ClassListComponent,
    ModalContentComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
