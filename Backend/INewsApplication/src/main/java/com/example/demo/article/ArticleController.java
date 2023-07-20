
package com.example.demo.article;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ArticleDetails;
import com.example.demo.repository.ArticleDetailRepository;

@RestController
public class ArticleController {
	@Autowired
	ArticleDetailRepository repo;
	
	@Autowired
	NewsApiService service;
	
	@GetMapping("/api/v1/fetch")
	public List<ArticleDetails> get() {
		return service.fetchNewsArticles();
	}
	
	@GetMapping("/api/v1/data-update")
	public String DataUpdate() {
		return service.saveNewsArticlesToDatabase();
	}
	
	
//	@GetMapping("/api/get")
//	public List<ArticleDetails> gets) {
//		return service.getAPIData();
//	}
//	
	@GetMapping("/api/v1/article/get")
	public List<ArticleDetails> getAlls() {
//		return repo.findAll();
		return repo.findAll();
	}
	
//	@PostMapping("/article/post")
//	public ArticleDetails create(@RequestBody ArticleDetails article) {
//		return repo.save(article);
//	}

}
