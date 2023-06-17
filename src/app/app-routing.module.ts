import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';

//Login
import { LoginComponent } from './landingPage/login/login.component';

//Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingsComponent } from './settings/settings.component';
import { ShowStudentComponent } from './students/show-student/show-student.component';
import { DashbodyComponent } from './dashbody/dashbody.component';
import { Error404Component } from './error404/error404.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { AppComponent } from './app.component';
import { CreateAssignmentComponent } from './assignment/create-assignment/create-assignment.component';
import { EditAssignmentComponent } from './assignment/edit-assignment/edit-assignment.component';
import { ShowAssignmentComponent } from './assignment/show-assignment/show-assignment.component';
import { user } from '@angular/fire/auth';
import { ShowLoginComponent } from './landingPage/login/show-login/show-login.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,

    children: [
      { path: '', component: LoginComponent },
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: DashbodyComponent },
      { path: 'user', component: ShowLoginComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'students/show', component: ShowStudentComponent},
      { path: 'students/create', component: CreateStudentComponent},
      { path: 'students/edit/:id', component: EditStudentComponent},
      { path: 'settings', component: SettingsComponent },
      { path: 'assignments/create', component: CreateAssignmentComponent },
      { path: 'assignments/show', component: ShowAssignmentComponent },
      { path: 'assignments/edit/:id', component: EditAssignmentComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
