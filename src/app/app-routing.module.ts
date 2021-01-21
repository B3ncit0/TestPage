import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { AboutComponent } from './about/about.component';
import { TestsComponent } from './tests/tests.component';
import { QuestionMakerComponent } from './question-maker/question-maker.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomescreenComponent },
  { path: 'about', component:AboutComponent},
  { path: 'tests', component:TestsComponent},
  { path: 'question-maker', component:QuestionMakerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
