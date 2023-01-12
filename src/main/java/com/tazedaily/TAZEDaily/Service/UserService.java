// package com.tazedaily.TAZEDaily.Service;

// import com.tazedaily.TAZEDaily.Domain.Authority;
// import com.tazedaily.TAZEDaily.Domain.User;
// import com.tazedaily.TAZEDaily.Repository.AuthorityRepository;
// import com.tazedaily.TAZEDaily.Repository.UserRepository;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.stereotype.Service;

// import java.util.Arrays;
// import java.util.HashSet;

// @Service
// public class UserService {

// private UserRepository userRepository;
// private AuthorityRepository authorityRepository;
// private BCryptPasswordEncoder bCryptPasswordEncoder;

// @Autowired
// public UserService(
// UserRepository userRepository,
// AuthorityRepository roleRepository,
// BCryptPasswordEncoder bCryptPasswordEncoder) {
// this.userRepository = userRepository;
// this.authorityRepository = roleRepository;
// this.bCryptPasswordEncoder = bCryptPasswordEncoder;
// }

// public User findUserByEmail(String email) {
// return userRepository.findByEmail(email);
// }

// public User findUserByLogin(String login) {
// return userRepository.findUserByLogin(login);
// }

// public User saveUser(User user) {
// user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
// Authority userRole = authorityRepository.findAuthorityByRole("ADMIN");
// user.setAuthorities(new HashSet<Authority>(Arrays.asList(userRole)));
// return userRepository.save(user);
// }
// }