package com.brageast.blog.thisboot.entity;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
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
    private String name;
    private Date startDate;
    private Date upDate;
    private String content;
    /**
     * 多重回复
     */
    private Reply[] replys;
}
