import {Component, OnInit} from '@angular/core';
import {BlogPost} from "./blogPost";
import {BlogPostService} from "./blog-post.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mentreon';
  public blogPosts: BlogPost[];

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit() {
    this.getBlogPosts();
  }

  public getBlogPosts(): void {
    this.blogPostService.getBlogPosts().subscribe(
      (response: BlogPost[]) => {
        this.blogPosts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddPost(addForm: NgForm): void {
    document.getElementById('add-post-form').click();
    this.blogPostService.addBlogPost(addForm.value).subscribe(
      (response: BlogPost) => {
        console.log(response);
        this.getBlogPosts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
