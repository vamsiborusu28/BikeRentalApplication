package com.example.bikerental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.bikerental.model.Comments;


@Repository
public interface CommentRepository extends JpaRepository<Comments,Long>{
    
}