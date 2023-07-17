package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository userRepo;

    public String updateDetails(User user) {
        userRepo.save(user);
        return "Updated";
    }

    public String deleteDetails(Long id) {
        userRepo.deleteById((long)id);
        return "Deleted";
    }
    
}
