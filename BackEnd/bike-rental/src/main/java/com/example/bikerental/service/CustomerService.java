package com.example.bikerental.service;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.bikerental.model.BikeModel;

import com.example.bikerental.model.CustomerModel;
import com.example.bikerental.model.Payment;
import com.example.bikerental.model.RenterModel;
import com.example.bikerental.repository.BikeRepository;
import com.example.bikerental.repository.CustomerRepository;
import com.example.bikerental.repository.PaymentRepository;
import com.example.bikerental.repository.RenterRepository;



@Service
public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;

    @Autowired
    private BikeRepository bikeRepository;

	@Autowired
	private RenterRepository renterRepository;
	
	@Autowired
	private PaymentRepository paymentRepository;

	
	//=======================To fetch all bike==========================
	public ResponseEntity<List<BikeModel>> getCustomerBike()   
	{  
		List<RenterModel> renters = renterRepository.findAll();
		List<BikeModel> bikes = new ArrayList<>();
		
		try {
			if(bikeRepository.findAll().isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			else
			{
				bikes=getActiveBikes(renters,bikes);
				return new ResponseEntity<>(bikes,HttpStatus.OK);
			}
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}  
	}  


 
    private List<BikeModel> getActiveBikes(List<RenterModel> renters, List<BikeModel> bikes) {
		for(RenterModel renter:renters){
			if(renter.getIsActive().equals("true")){
				List<BikeModel> bike = renter.getBike();
				for(int i = 0; i<bike.size();i++){
					if(bike.get(i).getAvailability().equals("true")){
						bikes.add(bike.get(i));
					}
				}
				
			}
		}
		return bikes;
	}



	//================  delete customer =======================
	public ResponseEntity<CustomerModel> delete(Long id)   
	{  
		try {
			if(customerRepository.findById(id).isPresent()) {
				customerRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.OK);
			}
			else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			}
			catch (Exception e) {
			      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}		
	}  
	  
    //======================= update customer============================
	public ResponseEntity<CustomerModel> update(Long id, CustomerModel customer) {
		try {
			if (customerRepository.findById(id).isPresent()) {
				CustomerModel edit = customerRepository.getReferenceById(id);
				edit.setAddress(customer.getAddress());
				edit.setUserName(customer.getUserName());
				edit.setMobileNumber(customer.getMobileNumber());
				edit.setGender(customer.getGender());
                edit.setImage(customer.getImage());
				return new ResponseEntity<>(customerRepository.save(edit), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

    //=====================get customer by id=============================
    public ResponseEntity<CustomerModel> getCustomerById(Long id) {
        try{
            if (customerRepository.findById(id).isPresent()) {
                return new ResponseEntity<>(customerRepository.getReferenceById(id),HttpStatus.OK);
            }else{
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
      
	//=====================Verify payement===============================
	public ResponseEntity<Payment> validatePayment(Payment payment) {
		Payment p = paymentRepository.findByCardNumber(payment.getCardNumber());
		if (p==null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}else {
			if(p.getCardNumber() == payment.getCardNumber() && p.getCardType().equals(payment.getCardType()) &&
				p.getExpiryMM() == payment.getExpiryMM() &&	p.getExpiryYY() == payment.getExpiryYY() &&	
				p.getName().equals(payment.getName()) && p.getCvv() == payment.getCvv()){
					return new ResponseEntity<>(HttpStatus.OK);
			}
			else {
				
				return new ResponseEntity<>(HttpStatus.FORBIDDEN);
			}
		}
	}
	
}
