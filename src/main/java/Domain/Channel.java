package Domain;

import java.io.Serializable;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * A channel, User Genre Preferences.
 */
@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "channel")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Channel implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    @Size(max = 50)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 50)
    private Long id;

    @Size(max = 255)
    private Genre preference;

    @ManyToOne
    @JoinColumn(unique = false)
    private User user;

    public Channel id(Long id) {
        this.setId(id);
        return this;
    }

    public Channel preference(Genre preference) {
        this.setPreference(preference);
        return this;
    }

    public Channel user(User user) {
        this.setUser(user);
        return this;
    }
}
