package com.example.bikerental.dto;

public class CommentsDto {
    private Long id;
    private String email;
    private String name;
    private String feedback;
    private String userRole;
	
		
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public String getUserRole() {
		return userRole;
	}
	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	
	public CommentsDto(String email, String name, String feedback,String userRole) {
		super();
		this.email = email;
		this.name = name;
		this.feedback = feedback;
		this.userRole = userRole;
	}
	public CommentsDto() {
		super();
		
	}
	
	
	@Override
	public String toString() {
		return "Comments [id=" + id + ", email=" + email + ", name=" + name + ", feedback=" + feedback + "]";
	}
}
