package com.brageast.blog.thisboot.entity;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

/**
 * 对应属性在this-blog-react
 * @author chenmo
 */
@Data
//@Builder
@Document(collection = "Article")
@NoArgsConstructor
public class Article {
    @Id
    private String articleId;
    private String title;
    private String[] label;
    private String classify;
    private String describe;
    @CreatedDate
    private Date startDate;
    private Date upDate;
    private String author;
    private String content;
    private Integer chick;
    private Reply[] replys;

}
