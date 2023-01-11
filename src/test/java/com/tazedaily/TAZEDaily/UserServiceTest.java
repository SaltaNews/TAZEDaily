package com.tazedaily.TAZEDaily;

import Domain.User;
import Repository.AuthorityRepository;
import Repository.UserRepository;
import Service.UserService;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;

public class UserServiceTest {

    @Mock
    private UserRepository mockUserRepository;
    @Mock
    private AuthorityRepository mockAuthorityRepository;
    @Mock
    private BCryptPasswordEncoder mockBCryptPasswordEncoder;

    private UserService userServiceUnderTest;
    private User user;

    @Before
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        userServiceUnderTest = new UserService(mockUserRepository,
                mockAuthorityRepository,
                mockBCryptPasswordEncoder);
        user = User.builder()
                .id(1L)
                .login("raylan.givens")
                .password("avacrowder")
                .firstName("Raylan")
                .lastName("Givens")
                .email("raylan.givens@usmarshals.gov")
                .imageUrl("github.com")
                .build();

        Mockito.when(mockUserRepository.save(any()))
                .thenReturn(user);
        Mockito.when(mockUserRepository.findByEmail(anyString()))
                .thenReturn(user);
    }

    @Test
    public void testFindUserByEmail() {
        // Setup
        final String email = "raylan.givens@usmarshals.gov";

        // Run the test
        final User result = userServiceUnderTest.findUserByEmail(email);

        // Verify the results
        assertEquals(email, result.getEmail());
    }

    @Test
    public void testSaveUser() {
        // Setup
        final String email = "raylan.givens@usmarshals.gov";

        // Run the test
        User result = userServiceUnderTest.saveUser(User.builder().build());

        // Verify the results
        assertEquals(email, result.getEmail());
    }
}
