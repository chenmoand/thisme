package com.brageast.cli

import java.lang.reflect.AccessibleObject
import java.lang.reflect.Member

fun main() {
    /*val JSON: MediaType = "application/json; charset=utf-8".toMediaType()
    val client = OkHttpClient()

    val build = Request.Builder().url("https://www.baidu.com").get().build()
    val execute = client.newCall(build).execute()
    execute.body?.run {
        charStream().readLines().forEach(::print)
    }

    val arrayOf = arrayOf("1", "2").toParameter()
    arrayOf.forEach(::print)
    println(arrayOf.size)*/

//    println("https://www.zhihu.com".toRequest().build().send())
//    val articleService: ArticleService = ArticleServiceImpl
//    articleService.addArticle(Article("1","2", arrayOf("")," ", "", Date(), Date(),"", "", ArticleType.ORIGINAL))

    val testCli = TestCli()
    K(testCli)
//    val ( name ) = User("sad")

    print(testCli)

}

fun K(tc: TestCli)  {
    tc.test()
}



fun TestCli.test() {
    name = "asdasd"
}
data class TestCli(var name:String? = null)

class Fbb<T> (val type: T) where T: Member, T: AccessibleObject {

    fun he() {
//        type.declaredAnnotations.
    }


}