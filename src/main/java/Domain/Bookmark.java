package Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToMany
    @JoinColumn(name = "newsArticle_id")
    private Long newsArticleId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Long userId;

    public Bookmark() {
    }
}
