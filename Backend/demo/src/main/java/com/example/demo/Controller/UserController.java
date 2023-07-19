
package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.iNewsUserDetails;
import com.example.demo.Repository.UserRepository;

@RestController

public class UserController {
    @Autowired
    UserRepository repo;

    @GetMapping("/get")
    public List<iNewsUserDetails> getAll() {
        return repo.findAll();
    }

    @PostMapping("/post")
    public iNewsUserDetails create(@RequestBody iNewsUserDetails user) {
        return repo.save(user);
    }
    
}