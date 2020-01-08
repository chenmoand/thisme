### ```20/01/02``` IDEA 的抽风小记

本来是挺群友说```kotlin```很好用, 有用IDEA尝尝鲜, 结果脑抽用了Gradle 这玩意感觉有点抽象, 然后今天用着用着IDEA突然不自动编译了, 我在运行的时候不知道是不上Gradle的自带项目结构的问题还是我电脑的问题, 我带开了IDEA的Run/Debug Configurations 发现居然有两个run??? 唯一的区别就是use classpath of module的不同我试着切换它, 发现他居然能自动编译了, 而用IDEA 绿色按钮的时候回使用缓存?? 如果没有缓存就会报错????? what f**k??? 我甚至严重怀疑是Gradle 自动生成的目录的锅 !!

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="ProjectModuleManager">
    <modules>
      <module fileurl="file://$PROJECT_DIR$/.idea/BLOG.iml" filepath="$PROJECT_DIR$/.idea/BLOG.iml" />
      <module fileurl="file://$PROJECT_DIR$/.idea/modules/Ktmd.iml" filepath="$PROJECT_DIR$/.idea/modules/Ktmd.iml" />
      <module fileurl="file://$PROJECT_DIR$/.idea/modules/Ktmd.main.iml" filepath="$PROJECT_DIR$/.idea/modules/Ktmd.main.iml" />
      <module fileurl="file://$PROJECT_DIR$/.idea/modules/Ktmd.test.iml" filepath="$PROJECT_DIR$/.idea/modules/Ktmd.test.iml" />
<!--      <module fileurl="file://$PROJECT_DIR$/.idea/modules/com.brageast.com.brageast.cli.Ktmd.main.iml" filepath="$PROJECT_DIR$/.idea/modules/com.brageast.com.brageast.cli.Ktmd.main.iml" />-->
<!--      <module fileurl="file://$PROJECT_DIR$/.idea/modules/com.brageast.com.brageast.cli.Ktmd.test.iml" filepath="$PROJECT_DIR$/.idea/modules/com.brageast.com.brageast.cli.Ktmd.test.iml" />-->
      <module fileurl="file://$PROJECT_DIR$/thisboot/thisboot.iml" filepath="$PROJECT_DIR$/thisboot/thisboot.iml" />
    </modules>
  </component>
</project>
```

我打开了.idea目录 发现module 有两个重复的我尝试把他注视掉, IDEA正常了,,,, 也许是我太LJ了

### ```20/01/08``` 受不了Gradle啦

Gradle抽风!!!Gradle抽风!!!Gradle抽风!!! 重要的事情说三遍

今天本来是想看看java的请求库, 我导入格式为:

```groovy
dependencies {
    // https://mvnrepository.com/artifact/com.google.code.gson/gson
    compile group: 'com.google.code.gson', name: 'gson', version: '2.8.6'
    compile "com.squareup.okhttp3:okhttp:4.3.1"
    compile "org.jetbrains.kotlin:kotlin-stdlib-jdk8"
}
```

我本来觉的没有什嘛问题, 可是一打开IDEA的代码 ```val gson = Gson()``` 很正常, 结果找不到Gson???? 纳尼, 我甚至以为是Gradle缓存有问题, 或者我IDEA设置有问题, 我调试了半天 , 根本就找不到那里出现了问题, 自从用Gradle创建的项目就一直出现脑残问题, 我都不知道这是为什么?? 我尝试用Maven ,,, 居然没有什嘛问题.... 虽然用xml导致文件过大, 但是他说真的没啥问题啊... gradle 我是真的看不懂, 太难了!!