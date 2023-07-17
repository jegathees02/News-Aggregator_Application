package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.BookmarkArticles;
import com.example.demo.repository.BookMarkArticleRepository;

@Service
public class BookmarkArticlesService {
    @Autowired
    BookMarkArticleRepository bookarticlesRepo;

    public String updateDetails(BookmarkArticles articles) {
        bookarticlesRepo.save(articles);
        return "Updated";
    }

    public String deleteDetails(long id) {
        bookarticlesRepo.deleteById((long)id);
        return "Deleted";
    }
}
