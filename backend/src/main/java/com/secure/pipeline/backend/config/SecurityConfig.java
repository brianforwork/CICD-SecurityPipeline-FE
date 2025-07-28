// src/main/java/com/secure/pipeline/backend/config/SecurityConfig.java
package com.secure.pipeline.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                        // Cho phép truy cập công khai vào endpoint status, health check và trang login
                        .requestMatchers("/api/status", "/login", "/actuator/health").permitAll()
                        // Tất cả các request khác đều yêu cầu phải xác thực
                        .anyRequest().authenticated())
                // Sử dụng form login mặc định của Spring Security
                .formLogin(withDefaults())
                // Sử dụng HTTP Basic Auth (hữu ích cho việc test API bằng Postman)
                .httpBasic(withDefaults());
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        // Tạo một người dùng mẫu trong bộ nhớ để test
        // Trong thực tế, bạn sẽ lấy thông tin người dùng từ database
        UserDetails user = User.builder()
                .username("user")
                .password(passwordEncoder().encode("password"))
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(user);
    }

}
