package com.brageast.blog.thisboot.config;

import com.brageast.blog.thisboot.controller.IndexController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.http.codec.ServerCodecConfigurer;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.config.ResourceHandlerRegistry;
import org.springframework.web.reactive.config.ViewResolverRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.springframework.web.reactive.resource.EncodedResourceResolver;
import org.springframework.web.reactive.resource.VersionResourceResolver;
import org.thymeleaf.spring5.view.reactive.ThymeleafReactiveViewResolver;

import java.util.concurrent.TimeUnit;

/**
 * WebFlux的配置
 *
 * @author chenmo
 */
@EnableWebFlux
@Configuration
public class WebFluxConfig implements WebFluxConfigurer {

    @Autowired(required = false)
    private ThymeleafReactiveViewResolver thymeleafReactiveViewResolver;
    @Autowired
    private IndexController indexController;


    @Override
    public void configureHttpMessageCodecs(ServerCodecConfigurer configurer) {
        configurer.defaultCodecs().enableLoggingRequestDetails(true);
    }

    @Bean
    public RouterFunction<ServerResponse> webFluxRoutesRegister() {
        return RouterFunctions.
                route(RequestPredicates.GET("/"), indexController::doIndex);
    }

    /*@Bean
    public ThymeleafReactiveViewResolver thymeleafReactiveViewResolver(ReactiveWebApplicationContext applicationContext) {
        ThymeleafReactiveViewResolver thymeleafViewResolver = new ThymeleafReactiveViewResolver();
        thymeleafViewResolver.setApplicationContext(applicationContext);
        thymeleafViewResolver.setRedirectViewProvider(RedirectView::new);
        thymeleafViewResolver.setTemplateEngine(new SpringWebFluxTemplateEngine());
        return thymeleafViewResolver;
    }*/

    /**
     * 注册视图
     * 2019/10/17 这视图问题磨了我一下午,要没有IDEA,估计我的灵魂已经祭天
     * 谷歌浏览器强转的翻译看官网很蛋疼!!!
     * https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux-config-view-resolvers
     *
     * @param registry
     */
    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        registry.viewResolver(thymeleafReactiveViewResolver);
    }

    /**
     * 将一些css 和 js 所加载
     * 2019/10/20 終於能加載靜態js資源了
     * https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux-config-static-resources
     *
     * @param registry
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/")
                .setCacheControl(CacheControl.maxAge(365, TimeUnit.DAYS))
                .resourceChain(true)
                .addResolver(new EncodedResourceResolver())
                .addResolver(new VersionResourceResolver().addContentVersionStrategy("/**"));
    }
}
