package com.example.bikerental.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bikerental.model.AdminModel;

@Repository
public interface AdminRepository extends JpaRepository<AdminModel,Long>{

}