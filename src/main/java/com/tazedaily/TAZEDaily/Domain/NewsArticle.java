package com.tazedaily.TAZEDaily.Domain;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String author;

    private String snip;

    private String article;

    private String image;

    private String source;

    private Genre genre;

    private LocalDateTime date;

    private Integer likes;

    @JsonIgnore
    @OneToMany
    private Set<Comment> Comments = new HashSet<>();
}
