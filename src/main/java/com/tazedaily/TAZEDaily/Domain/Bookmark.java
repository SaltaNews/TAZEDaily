package com.tazedaily.TAZEDaily.Domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Bookmark {
    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name = "news_article_id")
    private NewsArticle newsArticle;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
