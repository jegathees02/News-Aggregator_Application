package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.security.core.userdetails.UserDetails;

import com.example.demo.Entity.iNewsUserDetails;

public interface UserRepository extends JpaRepository<iNewsUserDetails,Long> {

    // UserDetails findByUsername(String username);
    
}
