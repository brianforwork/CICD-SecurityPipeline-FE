// src/main/java/com/secure/pipeline/backend/config/WebConfig.java
package com.secure.pipeline.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Cho phép tất cả các request từ frontend (ví dụ: chạy ở localhost:5173)
        // Dấu * là không an toàn cho production, nhưng chấp nhận được cho môi trường dev.
        registry.addMapping("/api/**") // Áp dụng cho tất cả các đường dẫn bắt đầu bằng /api/
                .allowedOrigins("http://localhost:5173", "http://localhost:3000") // URL của React app
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
