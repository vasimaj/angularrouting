import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { ServicesComponent} from './services/services.component';
import { LoginComponent} from './login/login.component';





const routes: Routes = [
  {
  path: 'user',
  component: UserComponent
  },
  {
  path: 'userdetails',
  component: UserdetailsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
