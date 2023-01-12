package com.tazedaily.TAZEDaily.Controller;

import com.tazedaily.TAZEDaily.Domain.Bookmark;
import com.tazedaily.TAZEDaily.Repository.BookmarkRepository;
import com.tazedaily.TAZEDaily.Service.BookmarkService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/bookmark")
public class BookmarkController {

    @Autowired
    private BookmarkRepository bookmarkRepository;
    @Autowired
    private BookmarkService bookmarkService;

    @GetMapping
    public ResponseEntity<Iterable<Bookmark>> getAllBookmarks() {
        return new ResponseEntity<>(bookmarkRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bookmark> getBookmarkById(@PathVariable Long id) {
        return new ResponseEntity<Bookmark>(bookmarkRepository.findBookmarkById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Bookmark> createBookmark(@RequestBody Bookmark bookmark) {
        bookmark.setNewsArticle(bookmarkService.getNewsArticle(1L));
        bookmark.setUser(bookmarkService.getUserById(1L));
        return new ResponseEntity<>(bookmarkRepository.save(bookmark), HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{bookmarkId}", method = RequestMethod.DELETE)
    public ResponseEntity<Bookmark> delete(@PathVariable Long bookmarkId) {
        bookmarkRepository.deleteById(bookmarkId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}