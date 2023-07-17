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
public class BookmarkArticles {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long bookmark_article_id;
	private long user_id;
	private long article_id;
	private String title;
	private String img_url;
	private String url;
	private String p_date;
	private String description;
	private boolean isSaved;
	

}
