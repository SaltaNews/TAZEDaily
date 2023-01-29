package TAZEDaily.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TAZEDaily.Domain.Comment;
import TAZEDaily.Domain.NewsArticle;
import TAZEDaily.Domain.User;
import TAZEDaily.Repository.CommentRepository;
import TAZEDaily.Repository.NewsArticleRepository;
import TAZEDaily.Repository.UserRepository;

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
