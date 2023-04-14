package com.example.bikerental.dto;

import com.example.bikerental.model.RenterModel;

public class BikeDto {
    private Long id;
    private String brandName;
    private String modelName;
    private String bikeNumber;
    private String bikeImage;
    private String description;
    private String rentAmount;
    private String pickUpLocation;
    private String availability;
    private String ownerName;
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
    public BikeDto(RenterModel renter) {
        super();
        this. renter = renter;
    }

    public BikeDto(String brandName, String modelName, String bikeNumber, String rentAmount, String pickUpLocation, String availability,String ownerName) {
       
        this.brandName = brandName;
        this.modelName = modelName;
        this.bikeNumber = bikeNumber;
        this.rentAmount = rentAmount;
        this.pickUpLocation = pickUpLocation;
        this.availability = availability;
        this.ownerName= ownerName;
   
    }


    public BikeDto() {
    }

}
