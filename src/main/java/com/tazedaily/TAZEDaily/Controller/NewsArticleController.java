package com.tazedaily.TAZEDaily.Controller;

import com.tazedaily.TAZEDaily.Domain.NewsArticle;
import com.tazedaily.TAZEDaily.Repository.NewsArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/newsarticle")
public class NewsArticleController {

    @Autowired
    NewsArticleRepository newsArticleRepository;

    @GetMapping
    public ResponseEntity<Iterable<NewsArticle>> getNewsArticles() {
        return new ResponseEntity<>(newsArticleRepository.findAll(), HttpStatus.OK);
    }
}
