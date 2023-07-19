package com.example.demo.Article;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.client.RestTemplate;

import com.example.demo.Entity.ArticleDetails;
import com.example.demo.Repository.ArticleDetailRepository;

import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j

public class NewsApiService {
	private static Logger logger = LoggerFactory.getLogger(NewsApiService.class);
    
     RestTemplate restTemplate;
    private String apiUrl;
    private String apiKey;
    @Autowired
    ArticleDetailRepository articleDetailRepository;

    
    public NewsApiService(RestTemplate restTemplate,
                          @Value("${newsapi.url}") String apiUrl,
                          @Value("${newsapi.apikey}") String apiKey,
                          ArticleDetailRepository articleDetailRepository) {
        this.restTemplate = restTemplate;
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
        this.articleDetailRepository = articleDetailRepository;
    }

    @GetMapping("/geta")
    public List<ArticleDetails> getAll() {
        return articleDetailRepository.findAll();
    }

    // Method to fetch news articles from the News API
    public List<ArticleDetails> fetchNewsArticles() {
//        System.out.println("Process Initiated");
//    	log.info("Process initiated");
    	// logger.info("Started");
        
         String url = apiUrl + "?apiKey=" + apiKey;
         logger.info("url "+url);
//        String url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b97401fa288b40d4aaa54e0dfa8c637c";
        System.out.println(url);
        logger.info(url);
        logger.info("End");
//        log.info(url);
        ResponseEntity<NewsApiResponse> response = restTemplate.getForEntity(url, NewsApiResponse.class);
        List<ArticleDetails> articles = new ArrayList<>();
        if (response.getStatusCode().is2xxSuccessful()) {
            NewsApiResponse newsApiResponse = response.getBody();
            if (newsApiResponse != null && newsApiResponse.getArticles() != null) {
                for (NewsApiArticle newsApiArticle : newsApiResponse.getArticles()) {
                    articles.add(mapToArticleDetails(newsApiArticle));
                }
            }
        }
        return articles;
    }

    // Map the retrieved data to the ArticleDetails entity
    private ArticleDetails mapToArticleDetails(NewsApiArticle newsApiArticle) {
        logger.info("Entered into mapToArticle function");
        ArticleDetails articleDetails = new ArticleDetails();
        articleDetails.setAuthor(newsApiArticle.getAuthor());
        articleDetails.setTitle(newsApiArticle.getTitle());
        articleDetails.setDescription(newsApiArticle.getDescription());
        articleDetails.setUrl(newsApiArticle.getUrl());
        articleDetails.setImg_url(newsApiArticle.getUrlToImage());
        articleDetails.setP_date(newsApiArticle.getPublishedAt());
        articleDetails.setContent(newsApiArticle.getContent());
        articleDetails.setLikes(0);
        articleDetails.setSaved(false);
        return articleDetails;
    }

    // Save fetched news articles to the database
    
    public void saveNewsArticlesToDatabase() {
        List<ArticleDetails> articles = fetchNewsArticles();
        articleDetailRepository.saveAll(articles);
        logger.info("program Ended");
    }
}
