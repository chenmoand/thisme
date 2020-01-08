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