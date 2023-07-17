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

import com.example.demo.entity.BookmarkNews;
import com.example.demo.repository.BookmarkNewsRepository;
import com.example.demo.service.BookmarkNewsService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/news/save/")
public class BookMarkNewsController {
    @Autowired
    BookmarkNewsRepository booknewssaveRepo;
    @Autowired
    BookmarkNewsService booknewsService;

    @GetMapping("/get") 
    public List<BookmarkNews> getList() {
        return booknewssaveRepo.findAll();
    }

    @PostMapping("/post")
    public BookmarkNews create(@RequestBody BookmarkNews news) {
        return booknewssaveRepo.save(news);
    }

    @PutMapping("/put")
    public String update(@RequestBody BookmarkNews news) {
        return booknewsService.updateDetails(news);
    }

    @DeleteMapping("/delete") 
    public String delete(@RequestParam long id) {
        return booknewsService.deleteDetails(id);
    }
}
