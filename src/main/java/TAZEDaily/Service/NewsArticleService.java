package TAZEDaily.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TAZEDaily.Domain.NewsArticle;
import TAZEDaily.Repository.NewsArticleRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class NewsArticleService {

    @Autowired
    NewsArticleRepository newsArticleRepository;

    public NewsArticle addLike(Long id) {
        NewsArticle newsArticle = newsArticleRepository.findArticleById(id);
        int likes = newsArticle.getLikes();
        newsArticle.setLikes(likes + 1);
        return newsArticleRepository.save(newsArticle);
    }
}
