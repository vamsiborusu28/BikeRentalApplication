package com.example.bikerental.service;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.bikerental.model.BikeModel;
import com.example.bikerental.model.Booking;
import com.example.bikerental.model.Comments;
import com.example.bikerental.model.CustomerModel;
import com.example.bikerental.model.RenterModel;
import com.example.bikerental.repository.AdminRepository;
import com.example.bikerental.repository.CommentRepository;
import com.example.bikerental.repository.CustomerRepository;
import com.example.bikerental.repository.RenterRepository;

@Service
public class AdminServices {
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private RenterRepository renterRepository;
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private AdminRepository adminRepository;

    String falseUser="false";
    String trueUser="true";
    //==========Fetch all customers====================
    public List<CustomerModel> getAllCustomers(){
        return customerRepository.findAll();
    }

    //===========Fetch all renters======================
    public List<RenterModel> getAllRenters(){
        return renterRepository.findAll();
    }

    //===========Fetch renter bikes======================
    public List<BikeModel> getRenterById(Long id){
        Optional<RenterModel> renter=renterRepository.findById(id);
        if(renter.isPresent()){
            return renter.get().getBike();
        }
        return Collections.emptyList();
    }

    //============Check if renter is active or not=================
    public RenterModel isRenterActive(Long id){
        RenterModel renter=renterRepository.getReferenceById(id);
        if(!renter.getIsActive().equals(falseUser)){
            renter.setIsActive(falseUser);
            renter=renterRepository.save(renter);
            
        }
        else if(!renter.getIsActive().equals(trueUser)){
            renter.setIsActive(trueUser);
            renter=renterRepository.save(renter);
        }
        return renter;
    }

    //============Check if customer is active or not=================
    public CustomerModel isCustomerActive(Long id){
        CustomerModel customer=customerRepository.getReferenceById(id);
        if(!customer.getIsActive().equals(falseUser)){
            customer.setIsActive(falseUser);
            customer=customerRepository.save(customer);
            
        }
        else if(!customer.getIsActive().equals(trueUser)){
            customer.setIsActive(trueUser);
            customer=customerRepository.save(customer);
            
        }
        return customer;
    }
    
    //========================getFeedback===========================
    public List<Comments> getAllComments(){
        return commentRepository.findAll();
    }

    //========================Get Admin Earninngs========================
	public double getAdminEarning(Long adminId) {
		return adminRepository.getReferenceById(adminId).getEarnings();
	}

    //========================Calculate admin revenue========================
    public ResponseEntity<Double> calculateRevenue(LocalDate startDate, LocalDate endDate) {
		Double revenue=0.0;
		List<RenterModel> renter=renterRepository.findAll();
        if(!renter.isEmpty()) {
            for(int i=0;i<renter.size();i++) {
                List<Booking> bookings=renter.get(i).getBooking();
                for(int j=0;j<bookings.size();j++) {
                    if((startDate.isBefore(bookings.get(j).getEndDate()) || startDate.isEqual(bookings.get(j).getEndDate())) && (endDate.isAfter(bookings.get(j).getEndDate()) || endDate.isEqual(bookings.get(j).getEndDate()))) {
                        revenue+=(bookings.get(j).getTotalAmount()*0.1);
                    }
                }
            }
        }
		return new ResponseEntity<>(revenue, HttpStatus.OK);
	}
}
