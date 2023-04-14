package com.example.bikerental.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.bikerental.model.Booking;
import com.example.bikerental.model.RenterModel;
import com.example.bikerental.repository.RenterRepository;

@Service
public class RenterService {
	@Autowired
	private RenterRepository renterRepository;
	
	//==================Get Renter Earninngs==================
	public double getRenterEarning(Long renterId) {
		return renterRepository.getReferenceById(renterId).getEarnings();
	}
	
	//===================== Get Renter By Id=====================
	public ResponseEntity<RenterModel> getRenterById(Long renterId) {
		try {
			if(renterRepository.findById(renterId).isPresent()) {
				return new ResponseEntity<>(renterRepository.getReferenceById(renterId),HttpStatus.OK);
			}
			else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}
		catch (Exception e) {
		    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}

	//=======================edit profile===========================
	public ResponseEntity<RenterModel> updateProfile(long id, RenterModel renter) {
		try {
            if(renterRepository.findById(id).isPresent()) {
                RenterModel editRenter=renterRepository.getReferenceById(id);
                editRenter.setMobileNumber(renter.getMobileNumber());
                editRenter.setUserName(renter.getUserName());
                editRenter.setGender(renter.getGender());
                editRenter.setImage(renter.getImage());
                editRenter.setAddress(renter.getAddress());
                return new ResponseEntity<>(renterRepository.save(editRenter), HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
		}
		catch (Exception e) {
		    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}

	//================================ Calculate renter revenue========================================
	public ResponseEntity<Double> calculateRevenue(Long id,LocalDate startDate, LocalDate endDate) {
		Double revenue=0.0;
		Optional<RenterModel> renter=renterRepository.findById(id);
		if(renter.isPresent()) {
			List<Booking> bookings=renter.get().getBooking();
			for(int i=0;i<bookings.size();i++) {
				if((startDate.isBefore(bookings.get(i).getEndDate()) || startDate.isEqual(bookings.get(i).getEndDate())) && (endDate.isAfter(bookings.get(i).getEndDate()) || endDate.isEqual(bookings.get(i).getEndDate()))) {
					revenue+=(bookings.get(i).getTotalAmount()-(bookings.get(i).getTotalAmount()*0.1));
				}
			}
		}
		return new ResponseEntity<>(revenue, HttpStatus.OK);
	}

}