import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MentorComponent} from "./mentor/mentor.component";


const routes: Routes = [
  {
    path: 'mentor', component: MentorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
