
package com.example.demo.Article;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewsApiResponse {
    @JsonProperty("articles")
    private List<NewsApiArticle> articles;

    public List<NewsApiArticle> getArticles() {
        return articles;
    }

    public void setArticles(List<NewsApiArticle> articles) {
        this.articles = articles;
    }
}


