package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.iNewsUserDetails;

public interface UserRepository extends JpaRepository<iNewsUserDetails,Long> {

  
    
}