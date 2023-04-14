package com.example.bikerental.dto;

import java.util.ArrayList;
import java.util.List;

public class CustomerDto {
    private Long id;
    private String email;
    private String password;
    private String mobileNumber;
    private String userName;
    private String gender;
    private String userRole;
    private String image;
    private String address;
    private String isActive;
    private List<BookingDto> booking = new ArrayList<>();

    

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    public String getIsActive() {
        return isActive;
    }

    public void setIsActive(String isActive) {
        this.isActive = isActive;
    }
    
    public List<BookingDto> getBooking() {
        return booking;
    }

    public void setBooking(List<BookingDto> booking) {
        this.booking = booking;
    }

    

    public CustomerDto(String email, String password, String mobileNumber, String userName, 
            String userRole,String isActive,List<BookingDto> booking) {
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.userName = userName;
        this.userRole = userRole;
        this.isActive = isActive;
        this.booking =booking;
    }

    public CustomerDto(Long id){
        this.id=id;
    }
    public CustomerDto() {
    }   
}
