import { NotfoundComponent } from './layout/includes/notfound/notfound.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './layout/pages/register/register.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { authGuard } from './shared/guards/auth.guard';
import { ForgetpasswordComponent } from './layout/includes/forgetpassword/forgetpassword.component';
import { HomeComponent } from './layout/pages/home/home.component';

export const routes: Routes =
[
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path: "Home", component: HomeComponent, canActivate :[authGuard], },
  {path: "Register",component:RegisterComponent},
  {path: "login",component:LoginComponent},
  {path: "ForGetPassword",component:ForgetpasswordComponent },


  {path:"**",component: NotfoundComponent}
];
