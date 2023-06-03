import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

//Landing Page
import { LoginComponent } from './landingPage/login/login.component';
import { RegisterComponent } from './landingPage/register/register.component';
import { HomeComponent } from './landingPage/home/home.component';
//import { TestimonialsComponent } from './landingPage/testimonials/testimonials.component';
import { ContactComponent } from './landingPage/contact/contact.component';

//Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CreateComponent } from './qualifications/create/create.component';
import { EditComponent } from './qualifications/edit/edit.component';
import { ShowComponent } from './qualifications/show/show.component';
import { SettingsComponent } from './settings/settings.component';
import { ShowStudentComponent } from './students/show-student/show-student.component';
import { PageComponent } from './landingPage/page/page.component';
import { DashbodyComponent } from './dashbody/dashbody.component';
import { PricingComponent } from './landingPage/pricing/pricing.component';
import { ServicesComponent } from './landingPage/services/services.component';
import { Error404Component } from './error404/error404.component';
import { ForgotPasswordComponent } from './landingPage/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './landingPage/verify-email/verify-email.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    //path: '', component: PageComponent,
    path: '', component: AppComponent,

    children: [
      { path: '', component: LoginComponent },
      /* { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'services', component: ServicesComponent }, */
      //{ path: 'plans', component: PlansComponent },
      //{ path: 'testimonials', component: TestimonialsComponent },
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
      //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  //{ path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
