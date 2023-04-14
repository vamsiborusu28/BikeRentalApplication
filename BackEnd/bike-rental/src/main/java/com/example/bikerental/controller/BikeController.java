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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bikerental.dto.BikeDto;
import com.example.bikerental.model.BikeModel;
import com.example.bikerental.service.BikeService;

@RestController

@CrossOrigin(origins="http://localhost:4200")
public class BikeController {
    @Autowired
	private BikeService bikeService;

	@Autowired
	private ModelMapper modelMapper;

	private BikeModel convertToBike(BikeDto bikeDto) {
        return modelMapper.map(bikeDto, BikeModel.class);
    }

	//getAllBikes
	@GetMapping
	public ResponseEntity<List<BikeModel>> getAllBikes(){
		return bikeService.getAllBikes();
	}
	
	@PostMapping("/bike/{id}")
	public ResponseEntity<BikeModel> addBikes(@PathVariable("id")long id, @RequestBody BikeDto data){
		BikeModel bike = convertToBike(data);
		return bikeService.addBikes(id,bike);
	}

	@PutMapping("/bike/{id}")
	public ResponseEntity<BikeModel> updateBikes(@PathVariable("id")long id,@RequestBody BikeDto data){
		BikeModel bike = convertToBike(data);
		return bikeService.updateBike(id,bike);
	}

	@DeleteMapping("/bike/{id}")
	public ResponseEntity<BikeModel> deleteBikeById(@PathVariable("id")long id){
		return bikeService.deleteBikeById(id);
	}

	@GetMapping("/bike/{id}")
	public ResponseEntity<BikeModel> getBikeById(@PathVariable("id")Long id){
		return bikeService.getBikeById(id);
	}

	@GetMapping("/renter/{renterId}")
    public List<BikeModel> getRenterById(@PathVariable Long renterId){
        return bikeService.getRenterById(renterId);
    }
}
