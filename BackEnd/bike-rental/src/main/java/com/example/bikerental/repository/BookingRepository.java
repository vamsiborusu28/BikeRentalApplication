package com.example.bikerental.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.bikerental.model.Booking;



public interface BookingRepository extends JpaRepository<Booking,Long> {
    List<Booking> findByCustomer(Long id);
    
}
