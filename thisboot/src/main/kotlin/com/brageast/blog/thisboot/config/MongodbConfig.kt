package com.brageast.blog.thisboot.config

import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories

@Configuration
@EnableReactiveMongoRepositories(basePackages = ["com.brageast.blog.thisboot.repository"])
class MongodbConfig