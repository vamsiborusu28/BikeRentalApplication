package com.example.bikerental.dto;

import java.time.LocalDate;

public class BookingDto {
    private Long bookingId;
    private Double totalAmount;
    private LocalDate bookingDate;
    private LocalDate endDate;
    private String renterName;
    private String customerName;
    private String brandName;
    private String modelName;
    private Long bikeId;
    private CustomerDto customer;
    private RenterDto renter;

    public Long getBookingId() {
        return bookingId;
    }
    public void setBookingIid(Long bookingId) {
        this.bookingId = bookingId;
    }
    public Double getTotalAmount() {
        return totalAmount;
    }
    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }
    public LocalDate  getBookingDate() {
        return bookingDate;
    }
    public void setBookingDate(LocalDate  bookingDate) {
        this.bookingDate = bookingDate;
    }
    public LocalDate  getEndDate() {
        return endDate;
    }
    public void setEndDate(LocalDate  endDate) {
        this.endDate = endDate;
    }
    public String getRenterName() {
        return renterName;
    }
    public void setRenterName(String renterName) {
        this.renterName = renterName;
    }
    public String getCustomerName() {
        return customerName;
    }
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Long getBikeId() {
        return bikeId;
    }

    public void setBikeId(Long bikeId) {
        this.bikeId = bikeId;
    }

    public CustomerDto getCustomer() {
        return customer;
    }
    public void setCustomer(CustomerDto customer) {
        this.customer = customer;
    }

    public RenterDto getRenter() {
        return renter;
    }

    public void setRenter(RenterDto renter) {
        this.renter = renter;
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

    public BookingDto(CustomerDto customer) {
        super();
        this. customer =  customer;
    }

    public BookingDto(RenterDto renter) {
        super();
        this. renter =  renter;
    }
    
    
    public BookingDto(Double totalAmount, LocalDate  bookingDate, LocalDate  endDate, String renterName,String customerName,String modelName,Long bikeId) {
        
        this.totalAmount = totalAmount;
        this.bookingDate = bookingDate;
        this.endDate = endDate;
        this.renterName = renterName;
        this.customerName = customerName;
        this.modelName = modelName;
        this.bikeId= bikeId;
    }

    public BookingDto() {
    }   
}
