package com.example.bikerental.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.bikerental.model.BikeModel;

public interface BikeRepository extends JpaRepository<BikeModel,Long> {
    boolean existsByBikeNumber(String bikeNumber);
}
