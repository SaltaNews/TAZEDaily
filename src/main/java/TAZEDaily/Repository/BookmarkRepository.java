package TAZEDaily.Repository;

import TAZEDaily.Domain.Bookmark;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface BookmarkRepository extends CrudRepository<Bookmark, Long> {
    Bookmark findBookmarkById(Long id);
}
