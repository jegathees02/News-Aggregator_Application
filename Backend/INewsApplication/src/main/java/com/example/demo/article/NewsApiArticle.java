
package com.example.demo.article;

import com.fasterxml.jackson.annotation.JsonProperty;



// The purpose of using the NewsApiArticle class is to provide a structured representation of the article data received from the News API. It acts as a data transfer object (DTO) to hold the information retrieved from the API response and allows easy mapping of the data to the ArticleDetails entity.
public class NewsApiArticle {
    @JsonProperty("author")
    private String author;

    @JsonProperty("title")
    private String title;

    @JsonProperty("description")
    
    private String description;

    @JsonProperty("url")
    private String url;

    @JsonProperty("urlToImage")
    private String urlToImage;

    @JsonProperty("publishedAt")
    private String publishedAt;

    @JsonProperty("content")
    private String content;
    
    

    public NewsApiArticle(String author, String title, String description, String url, String urlToImage,
			String publishedAt, String content) {
		super();
		this.author = author;
		this.title = title;
		
		this.description = description;
		this.url = url;
		this.urlToImage = urlToImage;
		this.publishedAt = publishedAt;
		this.content = content;
	}
    
    

	public NewsApiArticle() {
		super();
		// TODO Auto-generated constructor stub
	}



	public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUrlToImage() {
        return urlToImage;
    }

    public void setUrlToImage(String urlToImage) {
        this.urlToImage = urlToImage;
    }

    public String getPublishedAt() {
        return publishedAt;
    }

    public void setPublishedAt(String publishedAt) {
        this.publishedAt = publishedAt;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    // Getters and setters
    
}