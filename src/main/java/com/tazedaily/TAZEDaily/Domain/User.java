package com.tazedaily.TAZEDaily.Domain;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * A user.
 */
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class User {

    @Id
    private Long id;

    // @Pattern(regexp = Constants.LOGIN_REGEX)
    // @Size(min = 4, message = "*Your user name must have at least 4 characters")
    // @Column(length = 50, unique = true)
    // @NotEmpty(message = "*Please provide a user name")
    private String login;

    // @Size(min = 5, max = 60, message = "*Your password must have at least 5
    // characters")
    // @Column(length = 60, nullable = false)
    // @NotEmpty(message = "*Please provide your password")
    private String password;

    // @Size(max = 50)
    // @Column(name = "first_name", length = 50)
    // @NotEmpty(message = "*Please provide your name")
    private String firstName;

    // @Size(max = 50)
    // @Column(name = "last_name", length = 50)
    // @NotEmpty(message = "*Please provide your last name")
    private String lastName;

    @Email(message = "*Please provide a valid Email")
    // @NotEmpty(message = "*Please provide an email")
    // @Size(min = 5, max = 254)
    // @Column(length = 254, unique = true)
    private String email;

    // @Size(max = 256)
    // @Column(name = "image_url", length = 256)
    private String imageUrl;

    @ManyToMany
    @JoinTable(name = "user_authority", joinColumns = {
            @JoinColumn(name = "login", referencedColumnName = "login") }, inverseJoinColumns = {
                    @JoinColumn(name = "authority_role", referencedColumnName = "role") })
    private Set<Authority> authorities = new HashSet<>();
}