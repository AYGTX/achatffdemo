import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcheterComponent } from './acheter/acheter.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {component:HomeComponent,path:''},
  {component:AcheterComponent,path:'achat-forfait'},
  {component:AcheterComponent,path:'achat-forfait/:id'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
