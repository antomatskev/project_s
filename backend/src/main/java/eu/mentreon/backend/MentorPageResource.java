package eu.mentreon.backend;

import eu.mentreon.backend.model.BlogPost;
import eu.mentreon.backend.service.BlogPostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mentor")
public class MentorPageResource {
    private final BlogPostService blogPostService;

    public MentorPageResource(BlogPostService blogPostService) {
        this.blogPostService = blogPostService;
    }

    @GetMapping("/findPost/all")
    public ResponseEntity<List<BlogPost>> getAllBlogPosts () {
        List<BlogPost> blogPosts = blogPostService.findAllBlogPosts();
    return new ResponseEntity<>(blogPosts, HttpStatus.OK);
    }

    @GetMapping("/findPost/{id}")
    public ResponseEntity<BlogPost> getBlogPostById (@PathVariable("id") Long id) {
        BlogPost blogPost = blogPostService.findBlogPostById(id);
        return new ResponseEntity<>(blogPost, HttpStatus.OK);
    }

    @PostMapping("/addPost")
    public ResponseEntity<BlogPost> addBlogPost (@RequestBody BlogPost blogPost) {
        BlogPost newBlogPost = blogPostService.addBlogPost(blogPost);
        return new ResponseEntity<>(newBlogPost, HttpStatus.CREATED);
    }

    @PutMapping("/updatePost")
    public ResponseEntity<BlogPost> updateBlogPost (@RequestBody BlogPost blogPost) {
        BlogPost updateBlogPost = blogPostService.updateBlogPost(blogPost);
        return new ResponseEntity<>(updateBlogPost, HttpStatus.OK);
    }

    @DeleteMapping("/deletePost/{id}")
    public ResponseEntity<?> deleteBlogPost (@PathVariable("id") Long id) {
        blogPostService.deleteBlogPost(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
