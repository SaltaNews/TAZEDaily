package TAZEDaily.Domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * An authority (a security role) used by Spring Security.
 */
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Authority {
    @Id
    private String role;
}
