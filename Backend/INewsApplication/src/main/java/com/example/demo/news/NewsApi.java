package com.example.demo.news;

import java.util.List;
// import com.example.demo.entity.*;

public class NewsApi {
    private String status;
    private int totalResults;
//    private List<NewsMain> articles;
	private List<NewsMain> articles;

    // Getters and setters

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

    public List<NewsMain> getArticles() {
        return articles;
    }

    public void setArticles(List<NewsMain> articles) {
        this.articles = articles;
    }
}

