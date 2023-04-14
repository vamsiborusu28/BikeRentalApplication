package com.example.bikerental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bikerental.model.RenterModel;

@Repository
public interface RenterRepository extends JpaRepository<RenterModel,Long>{
    RenterModel findByUserName(String userName);
}
