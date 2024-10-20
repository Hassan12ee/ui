import { NotfoundComponent } from './layout/includes/notfound/notfound.component';
import { ChildActivationEnd, Routes } from '@angular/router';
import { RegisterComponent } from './layout/pages/register/register.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { authGuard } from './shared/guards/auth.guard';

import { HomeComponent } from './layout/pages/home/home.component';
import { CheckComponent } from './layout/pages/check/check.component';
import { ChatComponent } from './layout/pages/chat/chat.component';
import { OurDoctorsComponent } from './layout/pages/our-doctors/our-doctors.component';

export const routes: Routes =
[
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path: "Home", component: HomeComponent,  },
  {path: "Register",component:RegisterComponent},
  {path: "login",component:LoginComponent},
  {path: "OurDoctors",component:OurDoctorsComponent },
  {path: "check",component:CheckComponent },
  {path: "chatWithDoctor",component:ChatComponent },

  {path:"**",component: NotfoundComponent}
];
