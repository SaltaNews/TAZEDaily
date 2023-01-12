// package com.tazedaily.TAZEDaily.Service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import
// org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// import com.tazedaily.TAZEDaily.Domain.Authority;
// import com.tazedaily.TAZEDaily.Domain.User;

// import jakarta.transaction.Transactional;

// import java.util.ArrayList;
// import java.util.HashSet;
// import java.util.List;
// import java.util.Set;

// @Service
// public class TAZEUserDetailsService implements UserDetailsService {

// @Autowired
// private UserService userService;

// @Override
// @Transactional
// public UserDetails loadUserByUsername(String userName) throws
// UsernameNotFoundException {
// User user = userService.findUserByLogin(userName);
// List<GrantedAuthority> authorities = getUserAuthority(user.getAuthorities());
// return buildUserForAuthentication(user, authorities);
// }

// private List<GrantedAuthority> getUserAuthority(Set<Authority> userRoles) {
// Set<GrantedAuthority> roles = new HashSet<>();
// for (Authority authority : userRoles) {
// roles.add(new SimpleGrantedAuthority(authority.getRole()));
// }
// List<GrantedAuthority> grantedAuthorities = new ArrayList<>(roles);
// return grantedAuthorities;
// }

// private UserDetails buildUserForAuthentication(User user,
// List<GrantedAuthority> authorities) {
// return new
// org.springframework.security.core.userdetails.User(user.getLogin(),
// user.getPassword(),
// true, true, true, true, authorities);
// }
// }