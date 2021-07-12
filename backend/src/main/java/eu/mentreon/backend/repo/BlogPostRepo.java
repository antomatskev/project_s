package eu.mentreon.backend.repo;

import eu.mentreon.backend.model.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BlogPostRepo extends JpaRepository<BlogPost, Long> {
    void deleteBlogPostById(Long id);

    Optional<BlogPost> findBlogPostById(Long id);
}
