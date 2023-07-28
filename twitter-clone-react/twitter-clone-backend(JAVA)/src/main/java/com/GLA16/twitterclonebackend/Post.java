package com.GLA16.twitterclonebackend;

import java.time.Duration;
//import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.*; 

@Entity 
public class Post {

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
////	@ManyToOne(fetch = FetchType.LAZY) // Multiple posts can be linked to one user (ManyToOne) & User entity will not be loaded from the database until it's explicitly accessed (FetchType.LAZY)
//	@JoinColumn(name = "user_id", nullable = false)
//	private User author; // Establish a Many-to-One relationship with a user
//	
////	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
//    private List<Comment> comments; // One post can have many comments

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

	public Post() {}

	public Post(Long author_id, String content) {
		this.author_id = author_id;
		this.content = content;
		this.timestamp = ZonedDateTime.now();
	}

	public ZonedDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(ZonedDateTime timestamp) {
		this.timestamp = timestamp;
	}

	//Timestamp
//	public ZonedDateTime getTimestamp() {
//		return timestamp;
//	}
//	public void setTimestamp(ZonedDateTime timestamp) {
//		this.timestamp = timestamp;
//	}
//	public String getFormattedTimestamp() {
//        ZonedDateTime now = ZonedDateTime.now();
//        Duration duration = Duration.between(timestamp, now); // The difference between the time the post was made and now
//
//        if (duration.toMinutes() < 1) {
//            return "Just now"; // If the difference is less than 1 minute
//        } else if (duration.toMinutes() < 60) {
//            return duration.toMinutes() + " minutes ago"; // If the difference is less than 1 hour
//        } else if (duration.toHours() < 24) {
//            return duration.toHours() + " hours ago"; // If the difference is less than 1 day
//        } else if (duration.toDays() < 30) {
//            return duration.toDays() + " days ago"; // If the difference is less than 1 month
//        } else {
//            // For comments older than a month, the full timestamp will be shown
//            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss z");
//            return timestamp.format(formatter);
//        }
//	}
//	
	
}