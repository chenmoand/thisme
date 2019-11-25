package com.brageast.blog.thisboot.entity;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
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
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId articleId;
    private String title;
    private String[] label;
    private String classify;
    private String describe;
    private Date startDate;
    private Date upDate;
    private String author;
    private String content;
    private Integer chick;
    private Reply[] replys;
    private ArticleType articleType;
}
