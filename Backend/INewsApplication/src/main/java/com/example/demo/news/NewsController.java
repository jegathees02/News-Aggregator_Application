package com.example.demo.news;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.entity.NewsDetails;
// import com.example.demo.entity;
import com.example.demo.repository.NewsDetailRepository;

@RestController
public class NewsController {
	@Autowired
	NewsDetailRepository repo;
    @Autowired
    NewsService service;
	
	@GetMapping("/news/get")
	public List<NewsMain> getAll() {
		return repo.findAll();
	}
    @GetMapping("/news/fetch")
    public String fetchNews() {
        return service.saveNews(null);
    }
	
	@PostMapping("/news/post")
	public NewsMain create(@RequestBody NewsMain news) {
		return repo.save(news);
	}

}
