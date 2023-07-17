package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.NewsSource;
import com.example.demo.repository.NewsSourceRepository;

@Service
public class NewsSourceService {
    @Autowired
    NewsSourceRepository newsRepo;

    public String updateDetails(NewsSource news) {
        newsRepo.save(news);
        return "Updated";
    }
    public String deleteDetails(long id) {
        newsRepo.deleteById((long) id);
        return "Deleted";
    }
}
