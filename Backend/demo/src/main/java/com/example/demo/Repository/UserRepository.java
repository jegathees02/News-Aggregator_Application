package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.iNewsUserDetails;

public interface UserRepository extends JpaRepository<iNewsUserDetails,Long> {
    
}
