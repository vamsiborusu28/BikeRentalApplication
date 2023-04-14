package com.example.bikerental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bikerental.model.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long>{
	Payment findByCardNumber(long cardNumber);
}
