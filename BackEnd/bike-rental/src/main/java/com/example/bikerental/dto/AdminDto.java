package com.example.bikerental.dto;

public class AdminDto {
    private Long id;
    private String userName;
    private String email;
    private String password;
    private double earnings;
    

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public double getEarnings() {
        return earnings;
    }
    public void setEarnings(double earnings) {
        this.earnings = earnings;
    }
    public AdminDto(Long id, String userName, String email, String password,double earnings) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.earnings= earnings;
    }
    public AdminDto() {
    }
}
