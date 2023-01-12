package com.tazedaily.TAZEDaily.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tazedaily.TAZEDaily.Domain.Authority;
import com.tazedaily.TAZEDaily.Repository.AuthorityRepository;

@Controller
@RequestMapping("/authority")
public class AuthorityController {

    @Autowired
    AuthorityRepository authorityRepository;

    @GetMapping
    public ResponseEntity<Iterable<Authority>> getAuthorities() {
        return new ResponseEntity<>(authorityRepository.findAll(), HttpStatus.OK);
    }
}
