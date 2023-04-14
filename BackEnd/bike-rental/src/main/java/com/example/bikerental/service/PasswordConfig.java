package com.example.bikerental.service;

import org.springframework.stereotype.Service;
import org.mindrot.jbcrypt.BCrypt;
@Service
public class PasswordConfig {
    public String hashPassword(String plainTextPassword) {
        return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());

    }

    public boolean checkPass(String password, String hashed) {
        try {
            return BCrypt.checkpw(password, hashed);
        } catch (Exception e) {
            return false;
        }
    }
}
