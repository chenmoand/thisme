package com.brageast.blog.thisboot.entity;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

/**
 * 对应属性在this-blog-react
 * @author chenmo
 */
@Data
@Builder
@Document
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
