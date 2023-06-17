import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Toast, ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';

import { OverlayModule } from "@angular/cdk/overlay";
import { CdkMenuModule } from "@angular/cdk/menu";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importamos las clases para trabajar con firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideAuth, getAuth} from '@angular/fire/auth';

//importar configuracion de firebase
import { environment } from 'src/environments/environment';
import { HomeComponent } from './landingPage/home/home.component';
import { LoginComponent } from './landingPage/login/login.component';
import { FooterComponent } from './landingPage/footer/footer.component';
import { PageBodyComponent } from './landingPage/body/body.component';
import { DashbodyComponent } from './dashbody/dashbody.component';
import { Error404Component } from './error404/error404.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { ShowStudentComponent } from './students/show-student/show-student.component';

import { HttpClientModule } from '@angular/common/http';
import { ShowAssignmentComponent } from './assignment/show-assignment/show-assignment.component';
import { EditAssignmentComponent } from './assignment/edit-assignment/edit-assignment.component';
import { CreateAssignmentComponent } from './assignment/create-assignment/create-assignment.component';
import { ShowLoginComponent } from './landingPage/login/show-login/show-login.component';
import { ClassroomShowComponent } from './classroom/classroom-show/classroom-show.component';
import { ClassroomCreateComponent } from './classroom/classroom-create/classroom-create.component';
import { ClassroomEditComponent } from './classroom/classroom-edit/classroom-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    CalendarComponent,
    SettingsComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    PageBodyComponent,
    DashbodyComponent,
    Error404Component,
    CreateStudentComponent,
    EditStudentComponent,
    ShowStudentComponent,
    ShowAssignmentComponent,
    EditAssignmentComponent,
    CreateAssignmentComponent,
    ShowLoginComponent,
    ClassroomShowComponent,
    ClassroomCreateComponent,
    ClassroomEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    OverlayModule,
    CdkMenuModule,
    AngularFireAuthModule, //modulo para trabajar con firestore
    AngularFirestoreModule, //modulo para trabajar con firestore
    FormsModule, // modulo para formularios (create y edit)
    ReactiveFormsModule, // modulo para formularios (create y edit)
    provideAuth(() => getAuth()), ToastrModule.forRoot(), // modulo para trabajar con autenticacion
    HttpClientModule // modulo para trabajar con http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
