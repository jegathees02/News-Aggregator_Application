package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.ArticleSource;
import com.example.demo.repository.ArticleSourceRepository;

@Service
public class ArticleSourceService {
    @Autowired 
    ArticleSourceRepository articleRepo;

    public String updateDetails(ArticleSource articles) {
        articleRepo.save(articles);
        return "Updated";
    }
    public String deleteDetails(long id) {
        articleRepo.deleteById((long) id);
        return "Deleted";
    }
    
}
