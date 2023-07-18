// package com.example.demo.Article;

// // import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.scheduling.annotation.Scheduled;
// import org.springframework.stereotype.Component;

// @Component
// public class NewsApiScheduledTask {
//     private final NewsApiService newsApiService;

//     // @Autowired
//     public NewsApiScheduledTask(NewsApiService newsApiService) {
//         this.newsApiService = newsApiService;
//     }

//     @Scheduled(fixedRate = 3600000) // Fetch data every hour (adjust the interval as needed)
//     public void fetchAndSaveNewsArticles() {
//         newsApiService.saveNewsArticlesToDatabase();
//     }
// }

