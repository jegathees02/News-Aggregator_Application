package com.example.demo.article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

import com.example.demo.entity.ArticleDetails;
import com.example.demo.repository.ArticleDetailRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class NewsApiService {
    private final RestTemplate restTemplate;
    private final String apiUrl;
    private final String apiKey;
    private final ArticleDetailRepository articleDetailRepository;

    @Autowired
    public NewsApiService(RestTemplate restTemplate,
                          @Value("${newsapi.url}") String apiUrl,
                          @Value("${newsapi.apikey}") String apiKey,
                          ArticleDetailRepository articleDetailRepository) {
        this.restTemplate = restTemplate;
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
        this.articleDetailRepository = articleDetailRepository;
    }

    // Method to fetch news articles from the News API
//    @GetMapping("/api/data/fetch")
    public List<ArticleDetails> fetchNewsArticles() {
//        String url = apiUrl + "?apiKey=" + apiKey;
    	String url = "https://newsapi.org/v2/everything?q=tesla&from=2023-06-19&sortBy=publishedAt&apiKey=b97401fa288b40d4aaa54e0dfa8c637c";
        ResponseEntity<NewsApiResponse> response = restTemplate.getForEntity(url, NewsApiResponse.class);
        List<ArticleDetails> articles = new ArrayList<>();
        if (response.getStatusCode().is2xxSuccessful()) {
            NewsApiResponse newsApiResponse = response.getBody();
            if (newsApiResponse != null && newsApiResponse.getArticles() != null) {
                for (NewsApiArticle newsApiArticle : newsApiResponse.getArticles()) {
                	System.out.println(newsApiArticle.getContent());
                    articles.add(mapToArticleDetails(newsApiArticle));
                }
            }
        }
        
        return articles;
    }

    // Map the retrieved data to the ArticleDetails entity
    private ArticleDetails mapToArticleDetails(NewsApiArticle newsApiArticle) {
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
    public String saveNewsArticlesToDatabase() {
        List<ArticleDetails> articles = fetchNewsArticles();
        articleDetailRepository.saveAll(articles);
        return "Data Updated";
    }
}
