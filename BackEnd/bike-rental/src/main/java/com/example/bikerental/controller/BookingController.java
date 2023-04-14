package com.example.bikerental.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bikerental.dto.BookingDto;
import com.example.bikerental.model.Booking;
import com.example.bikerental.service.BookingService;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BookingController {
    @Autowired  
    BookingService bookingService; 
    
    @Autowired
	private ModelMapper modelMapper;

    private Booking convertToBooking(BookingDto bookingDto) {
        return modelMapper.map(bookingDto, Booking.class);
    }

    @PostMapping("/booking/{id}")
    public ResponseEntity<Booking> saveBookingHistory(@PathVariable("id")long id,@RequestBody BookingDto data){
        Booking booking = convertToBooking(data);
        return bookingService.saveBookingHistory(id,booking);
    }

    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getAllBookings(){
        return bookingService.getAllBookings();
    }

    @GetMapping("/customerBookings/{id}")
    public ResponseEntity<List<Booking>> getCustomerBooking(@PathVariable("id") long id){
        return bookingService.getCustomerBooking(id);
    }

    @GetMapping("/renterBookings/{id}")
    public ResponseEntity<List<Booking>> getRenterBooking(@PathVariable("id") long id){
        return bookingService.getRenterBooking(id);
    }

    @DeleteMapping("/booking/{id}")
	public ResponseEntity<Booking> deleteBookingById(@PathVariable("id")long id){
		return bookingService.deleteBookingById(id);
	}


}