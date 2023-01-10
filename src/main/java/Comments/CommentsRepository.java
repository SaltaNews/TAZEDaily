package Comments;

import org.springframework.stereotype.Repository;

import Domain.Comment;

import java.time.LocalDateTime;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentsRepository extends CrudRepository<Comment, Long>{

    void setDate(LocalDateTime datetime);

    void delete(Long commentId);
    
}
