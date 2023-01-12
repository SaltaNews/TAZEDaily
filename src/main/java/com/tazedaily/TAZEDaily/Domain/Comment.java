package com.tazedaily.TAZEDaily.Domain;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Comment {

    @Id
    private Long id;

    private String body;

    private String author;

    private LocalDateTime timeStamp;

    @ManyToOne
    private NewsArticle newsArticle;

    @ManyToOne
    private User user;
}
