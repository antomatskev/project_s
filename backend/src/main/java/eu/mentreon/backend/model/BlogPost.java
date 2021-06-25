package eu.mentreon.backend.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class BlogPost implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String postTitle;
    private String postText;
    private String postCode;

    public BlogPost() {}

    public BlogPost(String postTitle, String postText, String postCode) {
        this.postTitle = postTitle;
        this.postText = postText;
        this.postCode = postCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public String getPostText() {
        return postText;
    }

    public void setPostText(String postText) {
        this.postText = postText;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    @Override
    public String toString() {
        return "BlogPost{" +
                "id=" + id +
                ", postTitle=" + postTitle + '\'' +
                ", postText=" + postText + '\'' +
                ", postCode=" + postCode + '\'' +
                '}';
    }
}
