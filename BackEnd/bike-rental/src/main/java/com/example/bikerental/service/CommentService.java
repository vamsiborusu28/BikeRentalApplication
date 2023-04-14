package com.example.bikerental.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.bikerental.model.Comments;
import com.example.bikerental.repository.CommentRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
public class CommentService {

    @Autowired
	private CommentRepository commentRepository;

     //=====================Add Feedback===================== 
	public ResponseEntity<Comments> addComments(Comments comments) {	
		return new ResponseEntity<>(commentRepository.save(comments),HttpStatus.OK);
	}

}
