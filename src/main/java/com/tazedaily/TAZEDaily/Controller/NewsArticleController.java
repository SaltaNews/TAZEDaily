package com.tazedaily.TAZEDaily.Controller;

import com.tazedaily.TAZEDaily.Domain.Genre;
import com.tazedaily.TAZEDaily.Domain.NewsArticle;
import com.tazedaily.TAZEDaily.Repository.NewsArticleRepository;
import com.tazedaily.TAZEDaily.Service.NewsArticleService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping("/newsarticle")
public class NewsArticleController {

    @Autowired
    NewsArticleRepository newsArticleRepository;

    @Autowired
    NewsArticleService newsArticleService;

    @GetMapping
    public ResponseEntity<Iterable<NewsArticle>> getNewsArticles() {
        return new ResponseEntity<>(newsArticleRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<NewsArticle> getArticle(@PathVariable Long id) {
        return new ResponseEntity<>(newsArticleRepository.findArticleById(id), HttpStatus.OK);
    }

    @GetMapping("/genre/{genre}")
    public ResponseEntity<Iterable<NewsArticle>> getNewsArticlesByGenre(@PathVariable Genre genre) {
        return new ResponseEntity<>(newsArticleRepository.findArticlesByGenre(genre), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<NewsArticle> createNewsArticle(@RequestBody NewsArticle newsArticle) {
        return new ResponseEntity<>(newsArticleRepository.save(newsArticle), HttpStatus.CREATED);
    }

    @PostMapping("/postall")
    public ResponseEntity<Iterable<NewsArticle>> postAllArticles(@RequestBody List<NewsArticle> list) {
        return new ResponseEntity<>(newsArticleRepository.saveAll(list), HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<NewsArticle> increaseLikes(@PathVariable Long id) {
        return new ResponseEntity<>(newsArticleService.addLike(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<NewsArticle> delete(@PathVariable Long id) {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}