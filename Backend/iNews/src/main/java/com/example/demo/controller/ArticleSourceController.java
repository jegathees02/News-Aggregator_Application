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

import com.example.demo.entity.ArticleSource;
import com.example.demo.repository.ArticleSourceRepository;
import com.example.demo.service.ArticleSourceService;



@RestController
@RequestMapping("/article/source/")
public class ArticleSourceController {
    @Autowired
    ArticleSourceRepository articleRepo;
    @Autowired 
    ArticleSourceService articleService;

    @GetMapping("/get")
    public List<ArticleSource> findAll() {
        return articleRepo.findAll();
    }

    @PostMapping("/post")
    public ArticleSource create(@RequestBody ArticleSource article) {
        return articleRepo.save(article);
    }

    @PutMapping("/put")
    public String update(@RequestBody ArticleSource article) {
        return articleService.updateDetails(article);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@RequestParam long id) {
        return articleService.deleteDetails(id);
    }
}
