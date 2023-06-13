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
import { ShowComponent } from './qualifications/show/show.component';
import { CreateComponent } from './qualifications/create/create.component';
import { EditComponent } from './qualifications/edit/edit.component';
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
import { ShowAsignacionComponent } from './asignaciones/show-asignacion/show-asignacion.component';
import { CreateAsignacionComponent } from './asignaciones/create-asignacion/create-asignacion.component';
import { EditAsignacionComponent } from './asignaciones/edit-asignacion/edit-asignacion.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    CalendarComponent,
    SettingsComponent,
    HeaderComponent,
    ShowComponent,
    CreateComponent,
    EditComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    PageBodyComponent,
    DashbodyComponent,
    Error404Component,
    CreateStudentComponent,
    EditStudentComponent,
    ShowStudentComponent,
    ShowAsignacionComponent,
    CreateAsignacionComponent,
    EditAsignacionComponent
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
