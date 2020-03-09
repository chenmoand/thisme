package com.brageast.blog.thisboot.config

import com.mongodb.reactivestreams.client.MongoClient
import org.springframework.boot.autoconfigure.mongo.MongoProperties
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.config.AbstractReactiveMongoConfiguration
import org.springframework.data.mongodb.config.EnableMongoAuditing
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories

@Configuration
@EnableMongoAuditing
@EnableReactiveMongoRepositories(basePackages = ["com.brageast.blog.thisboot.repository"])
class MongodbConfig(
        val mongoProperties: MongoProperties,
        val mongoClient: MongoClient
) : AbstractReactiveMongoConfiguration() {

    override fun reactiveMongoClient(): MongoClient = mongoClient

    override fun getDatabaseName(): String = mongoProperties.database

    override fun autoIndexCreation(): Boolean = false

}