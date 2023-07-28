package com.GLA16.twitterclonebackend;

import java.time.LocalDate;
import java.time.ZonedDateTime;

import jakarta.persistence.*;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
    private String name;

	@Column(nullable = false, unique = true)
    private String email;
	
	@Column(nullable = false, unique = true)
    private String username;
	
	@Column(nullable = false)
    private String password;
    
    @Column
    private String profilePictureUrl;
    
    @Column(length = 200)
    private String bio;
	
    @Column
    private LocalDate dateOfBirth;
    
    @Column
    private ZonedDateTime registrationDate;
    
    
	public User() {}
	
	public User(String username,String password ) {
		this.username = username;
		this.password = password;
	}
	
	public User( String name, String username, String email, String password ) {
		this.name = name;
		this.username = username;
		this.email = email;
		this.password = password;
	}
  
	public User(Long id, String name, String email, String username, String password, String profilePictureUrl,
			String bio, LocalDate dateOfBirth, ZonedDateTime registrationDate) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.username = username;
		this.password = password;
		this.profilePictureUrl = profilePictureUrl;
		this.bio = bio;
		this.dateOfBirth = dateOfBirth;
		this.registrationDate = registrationDate;
	}


	

	public Long getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
}
	


