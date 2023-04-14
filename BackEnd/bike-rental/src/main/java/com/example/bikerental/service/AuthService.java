package com.example.bikerental.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.bikerental.model.AdminModel;
import com.example.bikerental.model.CustomerModel;
import com.example.bikerental.model.PasswordDecrypt;
import com.example.bikerental.model.RenterModel;
import com.example.bikerental.repository.AdminRepository;
import com.example.bikerental.repository.CustomerRepository;
import com.example.bikerental.repository.RenterRepository;

@Service
public class AuthService {
    @Autowired
    AdminRepository adminRepository;
    @Autowired
    RenterRepository renterRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    PasswordConfig passwordConfig;

    String userId ="userId";
    String username ="username";
    String email="email";
    String status="status";
    String active="active";
    String success="Success";
    String failure="Failure";
    
    //==================================SIGN-UP=========================
    //============================Renter================================
    public RenterModel setCurrentRenter(RenterModel data){
        List<RenterModel> renters=renterRepository.findAll();
        for(RenterModel renter:renters){
            if(renter.getEmail().equals(data.getEmail())){
                return renter;
            }
        }
        return null;
    }

    public RenterModel saveRenter(RenterModel data){
        RenterModel currentRenter=setCurrentRenter(data);
        if(currentRenter==null){
            String hash=passwordConfig.hashPassword(data.getPassword());
            data.setPassword(hash);
            return renterRepository.save(data);
        }
        return null;
    }

    //==============================Customer=================================
    public CustomerModel setCurrentCustomer(CustomerModel data){
        List<CustomerModel> customers=customerRepository.findAll();
        for(CustomerModel customer:customers){
            if(customer.getEmail().equals(data.getEmail())){
                return customer;
            }
        }
        return null;
    }

    public CustomerModel saveCustomer(CustomerModel data){
        CustomerModel currentCustomer=setCurrentCustomer(data);
        if(currentCustomer==null){
            String hash=passwordConfig.hashPassword(data.getPassword());
            data.setPassword(hash);
            return customerRepository.save(data);
        }
        return null;
    }
 
    //==================================LOGIN=======================================
    public Map<String, String> isAdminPresent(AdminModel data){
        List<AdminModel> admins = adminRepository.findAll();
        Map<String, String> result = new HashMap<>();
       
        for(AdminModel admin: admins){
            if(admin.getEmail().equals(data.getEmail()) && admin.getPassword().equals(data.getPassword())){
                result.put(userId, Long.toString(admin.getId()));
                result.put(username, admin.getUserName());
                result.put(email, admin.getEmail());
                result.put(status,success);
                break;
            }
            else{
                result.put(status, failure);
            }
        }
        return result;
    }

    public Map<String, Object> isRenterPresent(RenterModel data){
        List<RenterModel> renters = renterRepository.findAll();
        Map<String, Object> result = new HashMap<>();
        for(RenterModel renter:renters){
            if(renter.getEmail().equals(data.getEmail()) && passwordConfig.checkPass(data.getPassword(),renter.getPassword())){
                result.put(userId, renter.getId());
                result.put(username, renter.getUserName());
                result.put(email, renter.getEmail());
                result.put(status,success);
                result.put(active,renter.getIsActive());
                break;
            }
            else{
                result.put(status, failure);
            }
        }
        return result;
       
    }

    public Map<String, Object> isCustomerPresent(CustomerModel data){
        List<CustomerModel> customers = customerRepository.findAll();
        Map<String, Object> result = new HashMap<>();
        for(CustomerModel customer:customers){
            if(customer.getEmail().equals(data.getEmail()) && passwordConfig.checkPass(data.getPassword(),customer.getPassword())){
                result.put(userId, customer.getId());
                result.put(username, customer.getUserName());
                result.put(email, customer.getEmail());
                result.put(status,success);
                result.put(active,customer.getIsActive());
                break;
            }
            else{
                result.put(status, failure);
            }
        }
        return result;
       
    }
//========================update customer password========================================
    public ResponseEntity<CustomerModel> updateCustomerPassword(Long id, CustomerModel data){
        try{
            if(customerRepository.findById(id).isPresent()){
                CustomerModel customer = customerRepository.getReferenceById(id);
                customer.setPassword(passwordConfig.hashPassword(data.getPassword()));
                return new ResponseEntity<>(customerRepository.save(customer),HttpStatus.OK);
            }else{
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
                      
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }

    public boolean customerPasswordDecrypt(Long id,PasswordDecrypt oldPassword){
        CustomerModel customer = customerRepository.getReferenceById(id);
        return passwordConfig.checkPass(oldPassword.getPassword(),customer.getPassword());
           
        
       
    }


   //========================update renter password========================================
   public ResponseEntity<RenterModel> updateRenterPassword(Long id, RenterModel data){
        try{
            if(renterRepository.findById(id).isPresent()){
                RenterModel renter = renterRepository.getReferenceById(id);
                renter.setPassword(passwordConfig.hashPassword(data.getPassword()));
                return new ResponseEntity<>(renterRepository.save(renter),HttpStatus.OK);
            }else{
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
                    
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }

    public boolean renterPasswordDecrypt(Long id,PasswordDecrypt oldPassword){
        RenterModel renter = renterRepository.getReferenceById(id);
        return passwordConfig.checkPass(oldPassword.getPassword(),renter.getPassword());
           
    }
}
