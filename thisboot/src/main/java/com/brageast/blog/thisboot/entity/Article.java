package com.brageast.blog.thisboot.entity;

import com.brageast.blog.thisboot.annotation.Serializable;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * 对应属性在this-blog-react
 * @author chenmo
 */
@Data
@Builder
@Document(collection = "Article")
public class Article {
    @Id
    private int ArticleId;
    private String Title;
    private String[] Label;
    private String Classify;
    private String Describe;
    private Date StartDate;
    private Date UpDate;
    private String Author;
    private String Content;
    private Integer Chick;
    private String Url;
    private Reply[] Replys;
}
