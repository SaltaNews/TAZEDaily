package com.tazedaily.TAZEDaily.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tazedaily.TAZEDaily.Domain.Genre;
import com.tazedaily.TAZEDaily.Domain.NewsArticle;

@Repository
public interface NewsArticleRepository extends JpaRepository<NewsArticle, Long> {
    NewsArticle findArticleById(Long id);

    Iterable<NewsArticle> findArticlesByGenre(Genre genre);
}
