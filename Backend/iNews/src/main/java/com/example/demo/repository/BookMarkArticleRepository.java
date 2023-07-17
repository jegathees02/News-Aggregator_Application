package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.BookmarkArticles;

public interface BookMarkArticleRepository extends JpaRepository<BookmarkArticles , Long> {
    
}
