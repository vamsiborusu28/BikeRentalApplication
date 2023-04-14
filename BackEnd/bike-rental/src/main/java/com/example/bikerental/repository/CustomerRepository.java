package com.example.bikerental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bikerental.model.CustomerModel;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerModel,Long>{
    
}
