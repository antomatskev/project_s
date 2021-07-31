import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppUser} from "./appUser";

@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public signUpUser(user: AppUser): Observable<AppUser> {
    return this.http.post<AppUser>(`${this.apiServerUrl}/api/v1/registration`, user)
  }

}
