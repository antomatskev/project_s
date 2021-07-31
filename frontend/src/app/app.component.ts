import {Component, OnInit} from '@angular/core';
import {AppUser} from "./AppUser/appUser";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AppUserService} from "./AppUser/app-user.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'mentreon';

  constructor(private appUserService: AppUserService, private http: HttpClient, private router: Router) {
    // this.appUserService.authenticate(undefined, undefined);
  }

  authenticated() { }

  ngOnInit(): void {
  }

  public onOpenModal(appUser: AppUser, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#signUpModal');
    }
    container.appendChild(button);
    button.click();
  }

  public onSignUpModal(addForm: NgForm): void {
    document.getElementById('sign-up-form').click();
    this.appUserService.signUpUser(addForm.value).subscribe(
      (response: AppUser) => {
        console.log(response);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

}
