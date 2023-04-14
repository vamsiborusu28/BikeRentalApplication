package com.example.bikerental.controller;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bikerental.dto.CommentsDto;
import com.example.bikerental.model.Comments;
import com.example.bikerental.service.CommentService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CommentController {
	
	@Autowired
	private CommentService commentService;

	@Autowired
	private ModelMapper modelMapper;

    private Comments convertToComments(CommentsDto commentsDto) {
        return modelMapper.map(commentsDto, Comments.class);
    }
	
	@PostMapping("/comments")
	public ResponseEntity<Comments> addComments(@RequestBody CommentsDto data){
		Comments comments = convertToComments(data);
		return commentService.addComments(comments);
	}
}