package TAZEDaily.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TAZEDaily.Domain.NewsArticle;
import TAZEDaily.Domain.User;
import TAZEDaily.Repository.BookmarkRepository;
import TAZEDaily.Repository.NewsArticleRepository;
import TAZEDaily.Repository.UserRepository;

@Service
public class BookmarkService {

    @Autowired
    BookmarkRepository bookmarkRepository;
    @Autowired
    NewsArticleRepository newsArticleRepository;
    @Autowired
    UserRepository userRepository;

    public NewsArticle getNewsArticle(Long id) {
        return newsArticleRepository.findArticleById(id);
    }

    public User getUserById(Long id) {
        return userRepository.findUserById(id);
    }
}
