import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BlogPost} from "./blogPost";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.apiServerUrl}/mentor/findPost/all`)
  }

  public addBlogPost(blogPost: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(`${this.apiServerUrl}/mentor/addPost`, blogPost)
  }

  public deleteBlogPost(postId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/mentor/deletePost/${postId}`)
  }
}
