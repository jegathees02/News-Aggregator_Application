package com.example.demo.news;


import com.fasterxml.jackson.annotation.JsonProperty;

public class NewsArticle {
    private String author;

    @JsonProperty("publishedAt")
    private String publishedAt;

    private String description;
    private String url;

    @JsonProperty("urlToImage")
    private String urlToImage;

    private String content;

	public NewsArticle(String author, String publishedAt, String description, String url, String urlToImage,
			String content) {
		super();
		this.author = author;
		this.publishedAt = publishedAt;
		this.description = description;
		this.url = url;
		this.urlToImage = urlToImage;
		this.content = content;
	}

	public NewsArticle() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getPublishedAt() {
		return publishedAt;
	}

	public void setPublishedAt(String publishedAt) {
		this.publishedAt = publishedAt;
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

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

    
    // Add getters and setters for all the fields
    // You can also add any additional fields that you need to map from the API response
}
