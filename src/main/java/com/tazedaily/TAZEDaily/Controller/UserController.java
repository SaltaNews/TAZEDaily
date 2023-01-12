package com.tazedaily.TAZEDaily.Controller;

import com.tazedaily.TAZEDaily.Domain.User;
import com.tazedaily.TAZEDaily.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping
    public ResponseEntity<Iterable<User>> getAllUsers() {
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }
}
