package com.example.demo.dto.ArticleNewsSourceDto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NewsApiResponse {
    private String status;
    private int totalResults;
    private List<NewsApiArticle> articles;
}
