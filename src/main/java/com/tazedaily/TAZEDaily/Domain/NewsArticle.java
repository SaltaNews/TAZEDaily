package com.tazedaily.TAZEDaily.Domain;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * A NewsArticle.
 */

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class NewsArticle {

    @Id
    private Long id;

    private String title;

    private String author;

    private String article;

    private Genre genre;

    private LocalDateTime date;

    private Integer likes;

    @OneToMany(mappedBy = "newsArticle")
    private Set<Comment> Comments = new HashSet<>();
}
