package com.tazedaily.TAZEDaily.Domain;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * A channel, User Genre Preferences.
 */
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Channel {

    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(unique = false)
    private User user;

    @Enumerated(EnumType.STRING)
    private Genre preferences;
}
