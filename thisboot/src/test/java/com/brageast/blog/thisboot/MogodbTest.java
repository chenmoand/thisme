package com.brageast.blog.thisboot;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;

public class MogodbTest {
    public static void main(String[] args) {
        MongoClientURI uri = new MongoClientURI(
                "mongodb+srv://chenmo:<password>@cluster0-jbhpo.mongodb.net/test?retryWrites=true&w=majority");

        MongoClient mongoClient = new MongoClient(uri);
        MongoDatabase database = mongoClient.getDatabase("config");


    }
}
