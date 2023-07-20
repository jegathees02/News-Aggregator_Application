package com.example.demo.news;


import java.util.List;

public class NewsApiResponse {
    private String status;
    private int totalResults;
    private List<NewsArticle> articles;

    // Add getters and setters for all the fields

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getTotalResults() {
        return totalResults;
    }

    public void setTotalResults(int totalResults) {
        this.totalResults = totalResults;
    }

    public List<NewsArticle> getArticles() {
        return articles;
    }

    public void setArticles(List<NewsArticle> articles) {
        this.articles = articles;
    }
}

