// package com.example.demo.Config;

// import com.example.demo.Article.UserDetailsServiceImpl;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.http.HttpMethod;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// @Configuration
// @EnableWebSecurity
// public class WebSecurityConfig extends WebSecurityConfiguration {

//     private final UserDetailsServiceImpl userDetailsService;
//     private final JwtRequestFilter jwtRequestFilter;

//     @Autowired
//     public WebSecurityConfig(UserDetailsServiceImpl userDetailsService, JwtRequestFilter jwtRequestFilter) {
//         this.userDetailsService = userDetailsService;
//         this.jwtRequestFilter = jwtRequestFilter;
//     }

//     @Override
//     protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//         auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
//     }

//     @Override
//     protected void configure(HttpSecurity http) throws Exception {
//         http.csrf(withDefaults()).disable()
//                 .authorizeRequests(requests -> requests
//                         .antMatchers("/authenticate").permitAll()
//                         .antMatchers("/register").permitAll()
//                         .anyRequest().authenticated()
//                         .and()
//                         .formLogin()
//                         .loginPage("/login")
//                         .permitAll()
//                         .and()
//                         .logout()
//                         .logoutUrl("/logout")
//                         .permitAll());

//         http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
//     }

//     @Bean
//     @Override
//     public AuthenticationManager authenticationManagerBean() throws Exception {
//         return super.authenticationManagerBean();
//     }
    
//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }
// }
