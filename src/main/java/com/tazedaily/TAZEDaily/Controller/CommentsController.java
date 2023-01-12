package com.tazedaily.TAZEDaily.Controller;

import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tazedaily.TAZEDaily.Domain.Comment;
import com.tazedaily.TAZEDaily.Repository.CommentsRepository;

@RestController
@RequestMapping("/comment")
public class CommentsController {
    @Autowired
    private CommentsRepository commentsRepository;

    public CommentsController(CommentsRepository commentsRepository) {
        this.commentsRepository = commentsRepository;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Comment>> getAllComments() {
        Iterable<Comment> allComments = commentsRepository.findAll();
        return new ResponseEntity<>(allComments, HttpStatus.OK);
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<Comment> create(@RequestBody Comment comment, @RequestBody String date) {
        // LocalDateTime datetime = LocalDateTime.now();
        commentsRepository.save(comment);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/comment/{commentId}", method = RequestMethod.DELETE)
    public ResponseEntity<Comment> delete(@PathVariable Long commentId) {
        commentsRepository.deleteById(commentId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}