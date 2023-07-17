package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.BookmarkNews;

public interface BookmarkNewsRepository extends JpaRepository<BookmarkNews , Long> {
    
}
