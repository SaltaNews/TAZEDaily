package Bookmark;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class BookmarkController {
    @Autowired
    private BookmarkRepository bookmarkRepository;

    public BookmarkController (BookmarkRepository bookmarkRepository) {
        this.bookmarkRepository = bookmarkRepository;
    }

    @RequestMapping(value = "/bookmark/all", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Bookmark>> getAllBookmarks() {
        Iterable<Bookmark> allBookmark = bookmarkRepository.findAll();
        return new ResponseEntity<>(allBookmark, HttpStatus.OK);
    }

    @RequestMapping(value = "/bookmark/add", method = RequestMethod.POST)
    public ResponseEntity<Bookmark> create (@RequestBody Bookmark bookmark) {
        bookmarkRepository.save(bookmark);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value="/bookmark/{bookmarkId}", method=RequestMethod.DELETE)
    public ResponseEntity<Bookmark> delete (@PathVariable Long bookmarkId) {
        bookmarkRepository.delete(bookmarkId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
