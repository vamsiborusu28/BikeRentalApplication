package com.example.bikerental.controller;
import java.time.LocalDate;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bikerental.dto.RenterDto;
import com.example.bikerental.model.RenterModel;
import com.example.bikerental.service.RenterService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class RenterController {
	@Autowired
	private RenterService renterService;

	@Autowired
	private ModelMapper modelMapper;

    private RenterModel convertToRenter(RenterDto renterDto) {
        return modelMapper.map(renterDto, RenterModel.class);
    }
	
	 @GetMapping("/renterEarning/{renterId}")
	    public double getRenterEarning(@PathVariable Long renterId){
	        return renterService.getRenterEarning(renterId);
	    }
	 
	 @GetMapping("/renterDetail/{renterId}")
	    public ResponseEntity<RenterModel> getRenterById(@PathVariable Long renterId){
	        return renterService.getRenterById(renterId);
	    }
	 
	 @PutMapping("/renterProfile/{id}")
		public ResponseEntity<RenterModel> updateProfile(@PathVariable("id")long id,@RequestBody RenterDto data){
			RenterModel renter = convertToRenter(data);
			return renterService.updateProfile(id,renter);
		}

	@GetMapping("/renterRevenue/{id}/{startDate}/{endDate}")
	public ResponseEntity<Double> calculateRevenue(@PathVariable(value="id")long id,@PathVariable(value = "startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate, @PathVariable(value = "endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {
		return renterService.calculateRevenue(id,startDate,endDate);
	}
	
}