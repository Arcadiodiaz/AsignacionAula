import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';

//Login
import { LoginComponent } from './landingPage/login/login.component';

//Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CreateComponent } from './qualifications/create/create.component';
import { EditComponent } from './qualifications/edit/edit.component';
import { ShowComponent } from './qualifications/show/show.component';
import { SettingsComponent } from './settings/settings.component';
import { ShowStudentComponent } from './students/show-student/show-student.component';
import { DashbodyComponent } from './dashbody/dashbody.component';
import { Error404Component } from './error404/error404.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { AppComponent } from './app.component';
import { CreateAsignacionComponent } from './asignaciones/create-asignacion/create-asignacion.component';
import { ShowAsignacionComponent } from './asignaciones/show-asignacion/show-asignacion.component';

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
      { path: 'calendar', component: CalendarComponent },
      { path: 'students/show', component: ShowStudentComponent},
      { path: 'students/create', component: CreateStudentComponent},
      { path: 'students/edit/:id', component: EditStudentComponent},
      { path: 'settings', component: SettingsComponent },
      { path: 'qualifications/show', component: ShowComponent },
      { path: 'qualifications/create', component: CreateComponent },
      { path: 'qualifications/edit/:id', component: EditComponent },
      { path: 'asignaciones/create', component: CreateAsignacionComponent },
      { path: 'asignaciones/show', component: ShowAsignacionComponent }
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
