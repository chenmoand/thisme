package com.brageast.blog.thisboot.entity;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

/**
 * 回复
 */
@Data
@Builder
@Document
public class Reply {
    @Id
    private int ReplyId;
    private String Name;
    private Date StartDate;
    private Date UpDate;
    private String Content;
}
