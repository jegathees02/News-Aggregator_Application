package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.ArticleSource;


public interface ArticleSourceRepository extends JpaRepository<ArticleSource, Long> {

    
    
}
