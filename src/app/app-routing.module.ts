import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AcheterComponent } from './acheter/acheter.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {component:HomeComponent,path:''},
  {component:LoginComponent,path:'login'},
  {component:AcheterComponent,path:'achat-forfait',canActivate:[AuthGuard]},
  {component:AcheterComponent,path:'achat-forfait/:id',canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
