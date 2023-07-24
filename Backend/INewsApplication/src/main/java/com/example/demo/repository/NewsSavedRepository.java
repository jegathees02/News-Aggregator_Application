package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.NewsSaved;

public interface NewsSavedRepository  extends JpaRepository<NewsSaved,Long>{
     
}
