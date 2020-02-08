package com.brageast.blog.thisboot.config

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.http.CacheControl
import org.springframework.web.reactive.config.EnableWebFlux
import org.springframework.web.reactive.config.ResourceHandlerRegistry
import org.springframework.web.reactive.config.ViewResolverRegistry
import org.springframework.web.reactive.config.WebFluxConfigurer
import org.springframework.web.reactive.resource.EncodedResourceResolver
import org.springframework.web.reactive.resource.VersionResourceResolver
import org.springframework.web.reactive.result.method.annotation.ArgumentResolverConfigurer
import org.thymeleaf.spring5.view.reactive.ThymeleafReactiveViewResolver
import java.util.concurrent.TimeUnit


/**
 * WebFlux的配置
 *
 * @author chenmo
 */
@EnableWebFlux
@Configuration
class WebFluxConfig : WebFluxConfigurer {

    @Autowired(required = false)
    lateinit var thymeleafReactiveViewResolver: ThymeleafReactiveViewResolver

    override fun configureArgumentResolvers(configurer: ArgumentResolverConfigurer) {
        configurer.addCustomResolver()
    }

    /**
     * 注册视图
     * 2019/10/17 这视图问题磨了我一下午,要没有IDEA,估计我的灵魂已经祭天
     * 谷歌浏览器强转的翻译看官网很蛋疼!!!
     * https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux-config-view-resolvers
     *
     * @param registry
     */
    override fun configureViewResolvers(registry: ViewResolverRegistry) {
        registry.viewResolver(thymeleafReactiveViewResolver)
    }

    /**
     * 将一些css 和 js 所加载
     * 2019/10/20 終於能加載靜態js資源了
     * https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux-config-static-resources
     *
     * @param registry
     */
    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/")
                .setCacheControl(CacheControl.maxAge(365, TimeUnit.DAYS))
                .resourceChain(true)
                .addResolver(EncodedResourceResolver())
                .addResolver(VersionResourceResolver().addContentVersionStrategy("/**"))
    }

}