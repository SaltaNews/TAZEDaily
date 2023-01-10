package Comments;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Domain.Comment;


@RestController
public class CommentsController {
    @Autowired
    private CommentsRepository commentsRepository;

    public CommentsController (CommentsRepository commentsRepository) {
        this.commentsRepository = commentsRepository;
    }

    @RequestMapping(value = "/comment/all", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Comment>> getAllComments() {
        Iterable<Comment> allComments = commentsRepository.findAll();
        return new ResponseEntity<>(allComments, HttpStatus.OK);
    }

    @RequestMapping(value = "/comment/add", method = RequestMethod.POST)
    public ResponseEntity<Comment> create (@RequestBody Comment comment, @RequestBody String date) {
        DateTimeFormatter timeStamp = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String text = date.formatted(timeStamp);
        LocalDateTime datetime = LocalDateTime.parse(text, timeStamp);
        commentsRepository.save(comment);
        commentsRepository.setDate(datetime);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value="/comment/{commentId}", method=RequestMethod.DELETE)
    public ResponseEntity<Comment> delete (@PathVariable Long commentId) {
        commentsRepository.delete(commentId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}