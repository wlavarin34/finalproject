import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NOTE ilker added for 2 way data binding between template and component
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; // NOTE ilker added to use routes
import { AppComponent } from './app.component';
import { TeacherListComponent } from './component/teacher-list/teacher-list.component';
import { TeacherListDataServiceService } from '././service/teacher-list-data-service.service';

// NOTE ilker added below route definitions
const appRoutes:Routes = [
  {path:'', component: TeacherListComponent}, // NOTE ilker, the root route is StudentComponent
 
]

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent, // NOTE ilker added to use StudentComponent
      // NOTE ilker added to use AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // NOTE ilker added for 2 way data binding between template and component
    HttpModule,  // NOTE ilker added for StudentDataService to make REST call
    RouterModule.forRoot(appRoutes) // NOTE ilker to use and configure routes 
  ],
  providers: [TeacherListDataServiceService],  // NOTE ilker added StudentDataService after creating the service via CLI
  bootstrap: [AppComponent]
})
export class AppModule { }