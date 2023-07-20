package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.iNewsUserDetails;

public interface UserRepository extends JpaRepository<iNewsUserDetails,Long> {

    Optional<iNewsUserDetails> findByEmail(String email);


  
    
}