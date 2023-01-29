package TAZEDaily.Repository;

import TAZEDaily.Domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Long> {
    Authority findAuthorityByRole(String role);
}
