package com.example.bikerental.model;
import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


import java.util.List;

@Entity
@Table(name = "Renter")
public class RenterModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "email")
    private String email;
    @Column(name = "password", columnDefinition = "TEXT")
    private String password;
    @Column(name = "mobileNumber")
    private String mobileNumber;
    @Column(name = "userName")
    private String userName;
    @Column(name = "gender")
    private String gender;
    @Column(name = "userRole")
    private String userRole;
    @Column(name = "image", columnDefinition = "TEXT")
    private String image;
    @Column(name = "address")
    private String address;
    @Column(name = "earnings", columnDefinition = "integer default 0")
    private double earnings;
    @Column(name = "isActive")
    private String isActive;

    @OneToMany(mappedBy = "renter", fetch = FetchType.LAZY,cascade = CascadeType.REMOVE,orphanRemoval = true)
    @JsonIgnore
    private List<BikeModel> bike = new ArrayList<>();

    @OneToMany(mappedBy = "renter", fetch = FetchType.LAZY,cascade = CascadeType.ALL , orphanRemoval = true)
    @JsonIgnore
    private List<Booking> booking = new ArrayList<>();
    

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

    public double getEarnings() {
        return earnings;
    }


    public void setEarnings(double earnings) {
        this.earnings = earnings;
    }

    public String getIsActive() {
        return isActive;
    }

    public void setIsActive(String isActive) {
        this.isActive = isActive;
    }


    public List<BikeModel> getBike() {
        return bike;
    }


    public void setBike(List<BikeModel> bike) {
        this.bike = bike;
    }


    public List<Booking> getBooking() {
        return booking;
    }


    public void setBooking(List<Booking> booking) {
        this.booking = booking;
    }

    public RenterModel(Long id) {
        this.id = id;
    }

    public RenterModel(String email, String password, String mobileNumber, String userName,String userRole, double earnings, String isActive) {
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.userName = userName;
        this.userRole = userRole;
        this.earnings = earnings;
        this.isActive = isActive;
       
    }
    public RenterModel() {
    }
}