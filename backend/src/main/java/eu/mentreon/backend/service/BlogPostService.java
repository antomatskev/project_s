package eu.mentreon.backend.service;

import eu.mentreon.backend.exception.PostNotFoundException;
import eu.mentreon.backend.model.BlogPost;
import eu.mentreon.backend.repo.BlogPostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BlogPostService {

    private final BlogPostRepo blogPostRepo;

    @Autowired
    public BlogPostService(BlogPostRepo blogPostRepo) {
        this.blogPostRepo = blogPostRepo;
    }

    public BlogPost addBlogPost(BlogPost blogPost) {
        blogPost.setPostCode(UUID.randomUUID().toString());
        return blogPostRepo.save(blogPost);
    }

    public List<BlogPost> findAllBlogPosts() {
        return blogPostRepo.findAll();
    }

    public BlogPost findBlogPostById(Long id) {
        return blogPostRepo.findBlogPostById(id)
                .orElseThrow(() -> new PostNotFoundException("Post by id " + id + " was not found"));
    }

    public void deleteBlogPost(Long id) {
        blogPostRepo.deleteBlogPostById(id);
    }
}
