package com.example.demo.service;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.dto.ArticleNewsSourceDto.NewsApiArticle;
import com.example.demo.dto.ArticleNewsSourceDto.NewsApiResponse;
// import com.example.demo.dto.ArticleNewsSourceDto.ArticlesApiResponse;
// import com.example.demo.dto.ArticleNewsSourceDto.NewsApiArticle;
import com.example.demo.entity.ArticleSource;
import com.example.demo.repository.ArticleSourceRepository;

@Service
public class ArticleSourceService {

    private  final String NEWS_API_KEY = "";
    private final String NEWS_API_URL = "";
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

    // @Async
    // public CompletableFuture<Void> fetchAndSaveNewsArticles() {
    //     RestTemplate restTemplate = new RestTemplate();
    //     NewsApiResponse response = restTemplate.getForObject(NEWS_API_URL, NewsApiResponse.class);

    //     if (response != null && response.getArticles() != null) {
    //         List<NewsApiArticle> articles = response.getArticles();
    //         for (NewsApiArticle article : articles) {
    //             NewsArticle existingNewsArticle = ArticleSourceRepository.findByUrl(article.getUrl());

    //             if (existingNewsArticle == null) {
    //                 // If the news article does not exist, create a new one
    //                 NewsArticle newsArticle = new NewsArticle();
    //                 newsArticle.setTitle(article.getTitle());
    //                 newsArticle.setDescription(article.getDescription());
    //                 newsArticle.setUrl(article.getUrl());
    //                 newsArticle.setPublishedAt(article.getPublishedAt());

    //                 // Set ArticleSource if needed
    //                 // ArticleSource articleSource = articleSourceRepository.findBy...;
    //                 // newsArticle.setArticleSource(articleSource);

    //                 newsArticleRepository.save(newsArticle);
    //             } else {
    //                 // If the news article already exists, update its properties
    //                 existingNewsArticle.setTitle(article.getTitle());
    //                 existingNewsArticle.setDescription(article.getDescription());
    //                 existingNewsArticle.setPublishedAt(article.getPublishedAt());

    //                 // Set ArticleSource if needed
    //                 // ArticleSource articleSource = articleSourceRepository.findBy...;
    //                 // existingNewsArticle.setArticleSource(articleSource);

    //                 newsArticleRepository.save(existingNewsArticle);
    //             }
    //         }
    //     }

    //     return CompletableFuture.completedFuture(null);
    // }
    // }
    
}
