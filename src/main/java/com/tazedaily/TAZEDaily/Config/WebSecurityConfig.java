package com.tazedaily.TAZEDaily.Config;

import com.tazedaily.TAZEDaily.Service.TAZEUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfiguration {

    @Autowired
    private TAZEUserDetailsService tazeUserDetailsService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    protected void config(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(tazeUserDetailsService)
                .passwordEncoder(bCryptPasswordEncoder);
    }

    protected void conigure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests()
                .requestMatchers("/").permitAll()
                .requestMatchers("/login").permitAll()
                .requestMatchers("/registration").permitAll()
                .requestMatchers("/admin/**").hasAuthority("ADMIN").anyRequest()
                .authenticated().and().csrf().disable().formLogin()
                .loginPage("/login").failureUrl("/login?error=true")
                .defaultSuccessUrl("/index.html")
                .usernameParameter("login")
                .passwordParameter("password")
                .and().logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/login").and().exceptionHandling()
                .accessDeniedPage("/access-denied");
    }
}