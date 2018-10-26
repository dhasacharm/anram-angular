import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { LeaveComponent } from './users/leave/leave.component';
import { MatNativeDateModule, MatSliderModule, DateAdapter } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { EmployeeLeaveListComponent } from './users/employee-leave-list/employee-leave-list.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { HrmsMangamentComponent } from './users/hrms-mangament/hrms-mangament.component';
import { UserHomeComponent } from './users/user-home/user-home.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UserProfileComponent
  },
  {
    path: 'leave',
    component: LeaveComponent
  },
  {
    path: 'mangament',
    component: HrmsMangamentComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'list',
    component: LeavelistComponent
  },
  {
    path: '',
    component: SignupComponent
  },
  {
    path: 'forget',
    component: ForgetpasswordComponent
  },
  {
    path: 'reset',
    component: ResetpasswordComponent
  },
  {
    path: 'home',
    component: UserHomeComponent
  },
  {
    path: 'employeeleave',
    component: EmployeeLeaveListComponent
  },
  {
    path: 'change-pass',
    component: ChangePasswordComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    LeaveComponent,
    LeavelistComponent,
    EmployeeLeaveListComponent,
    UserProfileComponent,
    HrmsMangamentComponent,
    UserHomeComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
