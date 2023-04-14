package com.example.bikerental.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;


import com.example.bikerental.model.CustomerModel;
import com.example.bikerental.model.RenterModel;
import com.example.bikerental.model.BikeModel;
import com.example.bikerental.model.Comments;
import com.example.bikerental.service.AdminServices;

import org.springframework.web.bind.annotation.GetMapping;



@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AdminController {

    @Autowired
    AdminServices adminServices;
    

    @GetMapping("/customers")
    public List<CustomerModel> getAllCustomers() {
        return adminServices.getAllCustomers();
    }
    
    @GetMapping("/renters")
    public List<RenterModel> getAllRenters(){
        return adminServices.getAllRenters();
    }

    @GetMapping("/renters/{renterId}")
    public List<BikeModel> getRenterById(@PathVariable Long renterId){
        return adminServices.getRenterById(renterId);
    }
    
    @PutMapping("/renters/{id}")
    public RenterModel isRenterActive(@PathVariable Long id){
        return adminServices.isRenterActive(id);
    }

    @PutMapping("/customers/{id}")
    public CustomerModel isCustomerActive(@PathVariable Long id){
        return adminServices.isCustomerActive(id);
    }

    @GetMapping("/feedback")
    public List<Comments> getAllComments(){
        return adminServices.getAllComments();
    }

    @GetMapping("/adminEarnings/{adminId}")
    public double getAdminEarnin(@PathVariable Long adminId){
        return adminServices.getAdminEarning(adminId);
    }

    @GetMapping("/adminRevenue/{startDate}/{endDate}")
	public ResponseEntity<Double> calculateRevenue(@PathVariable(value = "startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate, @PathVariable(value = "endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {
		return adminServices.calculateRevenue(startDate,endDate);
	}
}
