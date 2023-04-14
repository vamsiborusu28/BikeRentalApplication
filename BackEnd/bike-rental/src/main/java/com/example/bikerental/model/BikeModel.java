package com.example.bikerental.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="Bikes")
public class BikeModel {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @Column(name="brandName")
    private String brandName;
    @Column(name="modelName")
    private String modelName;
    @Column(name="bikeNumber")
    private String bikeNumber;
    @Column(name="bikeImage" ,columnDefinition="TEXT")
    private String bikeImage;
    @Column(name="description")
    private String description;
    @Column(name="rentAmount")
    private String rentAmount;
    @Column(name="pickUpLocation")
    private String pickUpLocation;
    @Column(name="availability")
    private String availability;
    @Column(name="ownerName")
    private String ownerName;
   
    

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JsonIgnore
	@JoinColumn(nullable = false, name = "renter_id")
	private RenterModel renter;

        
    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getBrandName() {
        return brandName;
    }


    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }


    public String getModelName() {
        return modelName;
    }


    public void setModelName(String modelName) {
        this.modelName = modelName;
    }


    public String getBikeNumber() {
        return bikeNumber;
    }


    public void setBikeNumber(String bikeNumber) {
        this.bikeNumber = bikeNumber;
    }


    public String getBikeImage() {
        return bikeImage;
    }


    public void setBikeImage(String bikeImage) {
        this.bikeImage = bikeImage;
    }


    public String getDescription() {
        return description;
    }


    public void setDescription(String description) {
        this.description = description;
    }


    public String getRentAmount() {
        return rentAmount;
    }


    public void setRentAmount(String rentAmount) {
        this.rentAmount = rentAmount;
    }


    public String getPickUpLocation() {
        return pickUpLocation;
    }


    public void setPickUpLocation(String pickUpLocation) {
        this.pickUpLocation = pickUpLocation;
    }


    public String getAvailability() {
        return availability;
    }


    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getOwnerName() {
        return ownerName;
    }


    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public RenterModel getRenter() {
        return renter;
    }

    public void setRenter(RenterModel renter) {
        this.renter = renter;
    }
    public BikeModel(RenterModel renter) {
        super();
        this. renter = renter;
    }

    public BikeModel(String brandName, String modelName, String bikeNumber, String rentAmount, String pickUpLocation, String availability,String ownerName) {
       
        this.brandName = brandName;
        this.modelName = modelName;
        this.bikeNumber = bikeNumber;
        this.rentAmount = rentAmount;
        this.pickUpLocation = pickUpLocation;
        this.availability = availability;
        this.ownerName= ownerName;
   
    }


    public BikeModel() {
    }


   


    


   

    

    
    

}
    

    

    

    


