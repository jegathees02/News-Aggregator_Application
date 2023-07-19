
package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

import com.example.demo.entity.ArticleDetails;

// @Repository
public interface ArticleDetailRepository extends JpaRepository<ArticleDetails, Long> {

    void save(List<ArticleDetails> articles);
    
}