package com.example.bikerental.controller;

import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bikerental.dto.AdminDto;
import com.example.bikerental.dto.CustomerDto;
import com.example.bikerental.dto.RenterDto;
import com.example.bikerental.model.AdminModel;
import com.example.bikerental.model.CustomerModel;
import com.example.bikerental.model.PasswordDecrypt;
import com.example.bikerental.model.RenterModel;
import com.example.bikerental.service.AuthService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AuthController {
    
    @Autowired
    AuthService authService;

    @Autowired
	private ModelMapper modelMapper;

    private RenterModel convertToRenter(RenterDto renterDto) {
        return modelMapper.map(renterDto, RenterModel.class);
    }

    private CustomerModel convertToCustomer(CustomerDto customerDto) {
        return modelMapper.map(customerDto, CustomerModel.class);
    }

    private AdminModel convertToAdmin(AdminDto adminDto) {
        return modelMapper.map(adminDto, AdminModel.class);
    }

    @PostMapping("/admin/login")
    public Map<String,String> isAdminPresent(@RequestBody AdminDto data){
        AdminModel admin = convertToAdmin(data);
        return authService.isAdminPresent(admin);
    }

    @PostMapping("/renter/login")
    public  Map<String,Object> isRenterPresent(@RequestBody RenterDto data){
        RenterModel renter = convertToRenter(data);
        return authService.isRenterPresent(renter);
    }

    @PostMapping("/renter/signup")
    public RenterModel saveRenter(@RequestBody  RenterDto data){
        RenterModel renter = convertToRenter(data);
        return authService.saveRenter(renter);
    }

    @PostMapping("/customer/login")
    public Map<String,Object> isCustomerPresent(@RequestBody CustomerDto data){
        CustomerModel customer = convertToCustomer(data);
        return authService.isCustomerPresent(customer);
    }

    @PostMapping("/customer/signup")
    public CustomerModel saveCustomer(@RequestBody CustomerDto data){
        CustomerModel customer = convertToCustomer(data);
        return authService.saveCustomer(customer);
    }

    //========================update customer password========================================
    @PostMapping("customer/oldPassword/{id}")
    public boolean customerPasswordDecrypt(@PathVariable("id")Long id, @RequestBody PasswordDecrypt oldPassword){
        return authService.customerPasswordDecrypt(id, oldPassword);
    }

    @PutMapping("/customer/updatePassword/{id}")
    public ResponseEntity<CustomerModel> updateCustomerPassword(@PathVariable("id")Long id, @RequestBody CustomerDto data){
        CustomerModel customer = convertToCustomer(data);
        return authService.updateCustomerPassword(id, customer);
    }


    //========================update renter password========================================
    @PostMapping("renter/oldPassword/{id}")
    public boolean renterPasswordDecrypt(@PathVariable("id")Long id, @RequestBody PasswordDecrypt oldPassword){
        return authService.renterPasswordDecrypt(id, oldPassword);
    }

    @PutMapping("/renter/updatePassword/{id}")
    public ResponseEntity<RenterModel> updaterenterPassword(@PathVariable("id")Long id, @RequestBody RenterDto data){
        RenterModel renter = convertToRenter(data);
        return authService.updateRenterPassword(id, renter);
    }
}
