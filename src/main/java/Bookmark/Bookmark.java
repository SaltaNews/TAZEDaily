package Bookmark;
import jakarta.persistence.*;

@Entity
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "bookmark_id")
    private Long id;

    @ManyToMany
    @JoinColumn(name = "newsArticle_id")
    private Long newsArticle_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Long user_id;

    public Bookmark() {
    }
}
