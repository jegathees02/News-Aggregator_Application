

package com.example.demo.news;

// import com.example.demo.news.NewsMain;
import com.example.demo.repository.NewsDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

//Import statements...

@Service
public class NewsService {

 private final NewsDetailRepository newsDetailRepository;

 @Autowired
 public NewsService(NewsDetailRepository newsDetailRepository) {
     this.newsDetailRepository = newsDetailRepository;
 }

 public String saveNews(NewsMain newsMain) {
     newsDetailRepository.save(newsMain);
     return "data Saved";
 }

 public NewsMain getNewsById(Long id) {
     return newsDetailRepository.findById(id).orElse(null);
 }

 // Method to fetch data from newsapi.org
 public void fetchNewsDataFromApi() {
//     String apiKey = "YOUR_API_KEY";
//     String apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;
	 String apiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b97401fa288b40d4aaa54e0dfa8c637c";

     RestTemplate restTemplate = new RestTemplate();
     NewsApiResponse response = restTemplate.getForObject(apiUrl, NewsApiResponse.class);

     if (response != null && response.getArticles() != null) {
         for (NewsArticle article : response.getArticles()) {
             NewsMain newsMain = new NewsMain();
             newsMain.setAuthor(article.getAuthor());
             newsMain.setP_date(article.getPublishedAt());
             newsMain.setLikes(0);
             newsMain.setSaved(false);

             // Assuming the mapping is direct, otherwise, you may need to adjust it accordingly.
             NewsDescription description = new NewsDescription();
             description.setDescription(article.getDescription());
             newsMain.setDescription(description);

             NewsUrl url = new NewsUrl();
             url.setUrl(article.getUrl());
             newsMain.setUrl(url);

             NewsImage img = new NewsImage();
             img.setImgUrl(article.getUrlToImage());
             newsMain.setImg(img);

             NewsContent content = new NewsContent();
             content.setContent(article.getContent());
             newsMain.setContent(content);

             newsDetailRepository.save(newsMain);
         }
     }
 }

 // You can add more methods to fetch and update data as needed.
}
