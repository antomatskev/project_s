import {Component, OnInit} from '@angular/core';
import {BlogPost} from "./BlogPost/blogPost";
import {BlogPostService} from "./BlogPost/blog-post.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-mentor',
  templateUrl: 'mentor.component.html',
  styleUrls: ['mentor.component.css']
})

export class MentorComponent implements OnInit{
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
