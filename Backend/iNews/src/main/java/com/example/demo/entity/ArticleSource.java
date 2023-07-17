package com.example.demo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ArticleSource {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY);
	private long article_id;
	private String title;
	private String img_url;
	private String url;
	private String p_date;
	private long article_likes;
	private String article_source;
	private String description;
	private boolean isSaved = false;

}
