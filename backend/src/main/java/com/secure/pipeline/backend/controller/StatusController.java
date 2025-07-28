// src/main/java/com/secure/pipeline/backend/controller/StatusController.java
package com.secure.pipeline.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

/**
 * REST Controller để kiểm tra trạng thái của hệ thống.
 */
@RestController
@RequestMapping("/api") // Tiền tố chung cho tất cả các endpoint trong controller này
public class StatusController {

    /**
     * Endpoint trả về trạng thái của backend.
     * Truy cập qua: GET /api/status
     * @return Một Map chứa trạng thái, sẽ được chuyển thành JSON.
     */
    @GetMapping("/status")
    public Map<String, String> getStatus() {
        // Trả về một đối tượng Map, Spring Boot sẽ tự động chuyển nó thành JSON.
        // Ví dụ: {"status": "Backend is running!"}
        return Collections.singletonMap("status", "Backend is running!");
    }
}
