// src/main/java/com/secure/pipeline/backend/controller/SecretController.java
package com.secure.pipeline.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class SecretController {

    /**
     * Endpoint này chỉ có thể được truy cập bởi người dùng đã xác thực.
     * @return Một thông điệp bí mật.
     */
    @GetMapping("/secret")
    public Map<String, String> getSecret() {
        return Collections.singletonMap("message", "This is a classified message from the backend!");
    }
}