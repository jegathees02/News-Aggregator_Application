package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.NewsSource;
import com.example.demo.repository.NewsSourceRepository;
import com.example.demo.service.NewsSourceService;

@RestController
@RequestMapping("/news/source/")
public class NewsSourceController {
    @Autowired
    NewsSourceRepository newsRepo;
    @Autowired
    NewsSourceService newsService;

    @GetMapping("/get")
    public List<NewsSource> getAll() {
        return newsRepo.findAll();
    }

    @PostMapping("/post")
    public NewsSource create(@RequestBody NewsSource news) {
        return newsRepo.save(news);
    }

    @PutMapping("/put")
    public String update(@RequestBody NewsSource news) {
        return newsService.updateDetails(news);
    }

    @DeleteMapping("/delete/id")
    public String delete(@RequestParam long id) {
        return newsService.deleteDetails(id);
    }
    
}
