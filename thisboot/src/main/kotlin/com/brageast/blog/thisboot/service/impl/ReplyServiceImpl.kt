package com.brageast.blog.thisboot.service.impl

import com.brageast.blog.thisboot.entity.Reply
import com.brageast.blog.thisboot.service.ReplyService
import org.bson.types.ObjectId
import reactor.core.publisher.Flux

class ReplyServiceImpl: ReplyService {
    override fun findByArticleId(articleId: ObjectId): Flux<Reply> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

}