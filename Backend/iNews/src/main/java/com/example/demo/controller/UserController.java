package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import com.example.demo.entity.User;

@RestController
public class UserController {
	@Autowired
	UserRepository userrepo;
	@Autowired
	UserService userService;
	
	@GetMapping("/news")
	public List<User> getAll() {
		return userrepo.findAll();
	}
	
	@PostMapping("/postuser")
	public User saveUser(@RequestBody User user) {
		return userrepo.save(user);
	}
	
	@PutMapping("/put")
	public String update(@RequestBody User user) {
		return userService.updateDetails(user);
	}

	@DeleteMapping("/delete/{id}")
	public String delete(@RequestParam long id) {
		return userService.deleteDetails(id);
	}
	
	

}
