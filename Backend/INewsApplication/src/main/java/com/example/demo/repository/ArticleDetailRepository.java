package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.ArticleDetails;

public interface ArticleDetailRepository  extends JpaRepository<ArticleDetails,Long> {
//     Any additional methods or custom queries can be added here.
	// @Query("Select * from article_main")
	// public List<ArticleDetails> findAll();

    // public void saveAll(List<ArticleDetails> articles);
}