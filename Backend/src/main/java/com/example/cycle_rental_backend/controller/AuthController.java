package com.example.cycle_rental_backend.controller;

import com.example.cycle_rental_backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.cycle_rental_backend.repository.UserRepository;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login")
    public User getUser(@RequestParam String email, @RequestParam String password) {
        Optional<User> user = userRepository.findByEmail(email);
        System.out.println(user);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user.get();
        }
        return null;
    }}