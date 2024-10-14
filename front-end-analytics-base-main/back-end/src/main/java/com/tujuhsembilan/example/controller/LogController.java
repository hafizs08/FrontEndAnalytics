package com.tujuhsembilan.example.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/log")
public class LogController {

    @PostMapping
    public ResponseEntity<String> logError(@RequestBody Map<String, Object> logDetails) {
        log.error("Client Error: {}", logDetails);
        return new ResponseEntity<>("Log received", HttpStatus.OK);
    }
}
