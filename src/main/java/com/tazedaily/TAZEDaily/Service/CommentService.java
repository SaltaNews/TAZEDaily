package com.tazedaily.TAZEDaily.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tazedaily.TAZEDaily.Domain.Comment;
import com.tazedaily.TAZEDaily.Domain.NewsArticle;
import com.tazedaily.TAZEDaily.Domain.User;
import com.tazedaily.TAZEDaily.Repository.CommentRepository;
import com.tazedaily.TAZEDaily.Repository.NewsArticleRepository;
import com.tazedaily.TAZEDaily.Repository.UserRepository;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    NewsArticleRepository newsArticleRepository;

    public Iterable<Comment> getAll() {
        return commentRepository.findAll();
    }

    public NewsArticle getNewsArticle(Long id) {
        return newsArticleRepository.findArticleById(id);
    }

    public User getUserById(Long id) {
        return userRepository.findUserById(id);
    }
}
