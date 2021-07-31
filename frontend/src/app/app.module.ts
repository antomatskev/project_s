import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MentorComponent} from "./mentor/mentor.component";
import {AppUserService} from "./AppUser/app-user.service";


@NgModule({
  declarations: [
    AppComponent,
    MentorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppUserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
