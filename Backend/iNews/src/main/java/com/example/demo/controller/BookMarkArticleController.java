package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.BookmarkArticles;
import com.example.demo.repository.BookMarkArticleRepository;
import com.example.demo.service.BookmarkArticlesService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/articles/save/")
public class BookMarkArticleController {
    @Autowired
    BookMarkArticleRepository bookarticleRepo;
    @Autowired
    BookmarkArticlesService bookarticleService;

    @GetMapping("/get")
    public List<BookmarkArticles> getAll() {
        return bookarticleRepo.findAll();
    }

    @PostMapping("/post")
    public BookmarkArticles create(@RequestBody BookmarkArticles article) {
        return bookarticleRepo.save(article);
    }

    @PutMapping("/put")
    public String update(@RequestBody BookmarkArticles article) {
        return bookarticleService.updateDetails(article);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@RequestParam long id) {
        return bookarticleService.deleteDetails(id);
    }
    
}
