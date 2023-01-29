package TAZEDaily.Repository;

import TAZEDaily.Domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    public User findByEmail(String email);

    public User findUserById(Long id);

    public User findUserByLogin(String login);
}