package TAZEDaily.Domain;

public enum Genre {
    BUSINESS("buisness"),
    ENTERTAINMENT("entertainment"),
    FOOD("food"),
    HEALTH("health"),
    POLITICS("politics"),
    SPORTS("sports"),
    STYLE("style"),
    TECHNOLOGY("technology"),
    TRAVEL("travel");

    private final String name;

    private Genre(String string) {
        name = string;
    }

    public Genre getGenre(String string) {
        for (Genre g : Genre.values()) {
            if (g.name.equalsIgnoreCase(string))
                return g;
        }
        return Genre.BUSINESS;
    }
}
