package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

// import com.example.demo.dto.ArticleNewsSourceDto.NewsApiArticle;
import com.example.demo.entity.ArticleSource;
// import java.util.List;


public interface ArticleSourceRepository extends JpaRepository<ArticleSource, Long> {

    // public void save(NewsApiArticle newsArticle);
    ArticleSource  findByUrl(String url);
    
}
