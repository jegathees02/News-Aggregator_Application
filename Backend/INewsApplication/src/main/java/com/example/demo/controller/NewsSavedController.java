package com.example.demo.controller;

// import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import com.example.demo.entity.NewsSaved;
import com.example.demo.repository.NewsSavedRepository;

@RestController
@RequestMapping("/api/v1/ns")
public class NewsSavedController {
    @Autowired
    NewsSavedRepository repo;

    @GetMapping("/get")
    public List<NewsSaved> getAll() {
        return repo.findAll();
    }

    @PostMapping("/post")
    public NewsSaved create(@RequestBody NewsSaved news) {
        return repo.save(news);
    }
}
