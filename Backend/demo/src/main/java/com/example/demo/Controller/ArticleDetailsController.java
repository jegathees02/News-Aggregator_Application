package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.ArticleDetails;
import com.example.demo.Repository.ArticleDetailRepository;

@RestController
public class ArticleDetailsController {
	@Autowired
	ArticleDetailRepository repo;
	
	@GetMapping("/geta")
	public List<ArticleDetails> findall() {
		return repo.findAll();
	}

}
