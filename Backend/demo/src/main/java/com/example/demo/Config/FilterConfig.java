// package com.example.demo.Config;

// import org.springframework.boot.web.servlet.FilterRegistrationBean;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;

// @Configuration
// public class FilterConfig {

//     @Bean
//     public FilterRegistrationBean<JwtRequestFilter> jwtFilter() {
//         FilterRegistrationBean<JwtRequestFilter> registrationBean = new FilterRegistrationBean<>();
//         registrationBean.setFilter(new JwtRequestFilter(null));
//         registrationBean.addUrlPatterns("/secured/*"); // Add URL patterns to filter
//         return registrationBean;
//     }
// }
