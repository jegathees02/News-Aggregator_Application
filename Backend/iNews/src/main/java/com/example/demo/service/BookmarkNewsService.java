package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.BookmarkNews;
import com.example.demo.repository.BookmarkNewsRepository;

@Service
public class BookmarkNewsService {
    @Autowired
    BookmarkNewsRepository bookmarknewsRepo;

    public String updateDetails(BookmarkNews news ) {
        bookmarknewsRepo.save(news);
        return "Updated";
    }
    public String deleteDetails(long id) {
        bookmarknewsRepo.deleteById((long) id);
        return "Deleted";
    }
    
}
