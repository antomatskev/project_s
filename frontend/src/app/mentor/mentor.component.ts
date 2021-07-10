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
  public editBlogPost: BlogPost;
  public deleteBlogPost: BlogPost;

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit() {
    this.getBlogPosts();
  }

  public getBlogPosts(): void {
    this.blogPostService.getBlogPosts().subscribe(
      (response: BlogPost[]) => {
        this.blogPosts = response;
        console.log(this.blogPosts);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(blogPost: BlogPost, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPostModal');
    }
    if (mode === 'edit') {
      this.editBlogPost = blogPost;
      button.setAttribute('data-target', '#updatePostModal');
    }
    if (mode === 'delete') {
      this.deleteBlogPost = blogPost;
      button.setAttribute('data-target', '#deletePostModal');
    }
    container.appendChild(button);
    button.click();
  }

  public onAddPost(addForm: NgForm): void {
    document.getElementById('add-post-form').click();
    this.blogPostService.addBlogPost(addForm.value).subscribe(
      (response: BlogPost) => {
        console.log(response);
        this.getBlogPosts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePost(blogPost: BlogPost): void {
    document.getElementById('edit-post-form').click();
    this.blogPostService.updateBlogPost(blogPost).subscribe(
      (response: BlogPost) => {
        console.log(response);
        this.getBlogPosts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePost(postId: number): void {
    document.getElementById('delete-post-form').click();
    this.blogPostService.deleteBlogPost(postId).subscribe(
      (response: void) => {
        console.log(response);
        this.getBlogPosts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
