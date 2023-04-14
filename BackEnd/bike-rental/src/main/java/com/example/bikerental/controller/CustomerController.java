package com.example.bikerental.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bikerental.dto.CustomerDto;
import com.example.bikerental.dto.PaymentDto;
import com.example.bikerental.model.BikeModel;
import com.example.bikerental.model.CustomerModel;
import com.example.bikerental.model.Payment;
import com.example.bikerental.service.CustomerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CustomerController {
    @Autowired  
	CustomerService customerService;  

	@Autowired
	private ModelMapper modelMapper;

    private CustomerModel convertToCustomer(CustomerDto customerDto) {
        return modelMapper.map(customerDto, CustomerModel.class);
    }

	private Payment convertToPayment(PaymentDto paymentDto) {
        return modelMapper.map(paymentDto,  Payment.class);
    }

 
	@GetMapping("/customer")  
	//getAllCustomers
	public ResponseEntity<List<BikeModel>> getCustomerBike()   
	{  
		return customerService.getCustomerBike();  
	} 
    // deleteCustomer
	@DeleteMapping("/customer/{id}")  
	public ResponseEntity<CustomerModel> deleteCustomer(@PathVariable("id") long id){  
		return customerService.delete(id);  
	}  
      
    //update customer
	@PutMapping("/customer/{id}")  
	public ResponseEntity<CustomerModel> update(@PathVariable("id")long id, @RequestBody CustomerDto data){
        CustomerModel customer = convertToCustomer(data);   
	  	return customerService.update(id, customer); 
	}
    
    @GetMapping("/customer/{id}")
    public ResponseEntity<CustomerModel> getCustomerById(@PathVariable("id")long id){
        return customerService.getCustomerById(id);
    }

	//payment validation
	@PostMapping("/payment")
	public ResponseEntity<Payment> validatePayment(@RequestBody PaymentDto data){
		Payment payment = convertToPayment(data);
		return customerService.validatePayment(payment);
		
	}

	
}
