package com.GLA16.twitterclonebackend;

import java.time.ZonedDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Comment {
	
	@Column
	private Long post_id;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private Long author_id;
	
	@Column(nullable = false, length = 280) // A post cannot be null, with maximum length of 280 characters
	private String content;
	
	@Column(nullable = false)
	@CreationTimestamp 
	private ZonedDateTime timestamp; // To store the timestamp (with timezone) of when the peck was created, so it can be presented in chronological order
	
	@Column
	private int likes = 0;
	
	public Comment() {}

	public Comment(Long author_id, String content, Long post_id) {
		this.post_id = post_id;
		this.author_id = author_id;
		this.content = content;
		this.timestamp = ZonedDateTime.now();
	}
	
	public Long getPost_id() {
		return post_id;
	}

	public void setPost_id(Long post_id) {
		this.post_id = post_id;
	}

	//ID
	public Long getId() {
		return id;
	}

	public Long getAuthor_id() {
		return author_id;
	}

	public void setAuthor_id(Long author_id) {
		this.author_id = author_id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}
	
	public void addLike() {
		setLikes(likes++);
	}
	
	public void removeLike() {
		if (likes > 0) {	
			setLikes(likes--);
		}
	}

	public ZonedDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(ZonedDateTime timestamp) {
		this.timestamp = timestamp;
	}


}


