package Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import Domain.Bookmark;

@Repository
public interface BookmarkRepository extends CrudRepository<Bookmark, Long> {

    void delete(Long bookmarkId);
}
