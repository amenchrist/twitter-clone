package com.GLA16.twitterclonebackend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TwitterCloneController {
	
	
	@Autowired
	private TwitterCloneService service;
	
	//CREATE NEW USER
	@PostMapping("/users")
	public Long addUser(@RequestBody User user) {
		User newU = null;
		try{
			service.addUser(user);
			return user.getId();
		}catch (Exception e) {
			return newU.getId();
		}
		
	}
	
	//GET A USER
	@GetMapping ("/user/{id}")
	public User getUser(@PathVariable(value = "id") int id){
		try {
			return service.getUserById(id);
		} catch (Exception e) {
			return null;
		}
	}
	
	//GET ALL USERS
	@GetMapping ("/users")
	public List<User> users(){
		return service.getAllUsers();
	}
	
	//UPDATE A USER
	@PutMapping("/users")
	public boolean EditUser(@RequestBody User user) {
		try{
			
			return false;
			
		}catch (Exception e) {
			return false;
		}
		
	}
	//DELET A USER
	@DeleteMapping("/users/{id}")
	public boolean DeleteUser(@PathVariable(value="id") int id) {
		try{
			service.deleteUser(id);
			return true;
			
		}catch (Exception e) {
			return false;
		}
		
	}
	
	//SIGN A USER IN
	@PostMapping("/signin")
	public long authenticateUser(@RequestBody User user) {
		try{
			return service.authenticateUser(user);
		}catch (Exception e) {
			return 0;
		}
		
	}
	////////////////////////////////////////////////////////////////////
	//////////-------POSTS-------///////////////////
	////////////////////////////////////////////////////////////////////
	
	//CREATE NEW POST
	@PostMapping("/posts")
	public boolean addPost(@RequestBody Post post) {
		try{
			service.addPost(post);
			return true;
		}catch (Exception e) {
			return false;
		}
	}
	
	//GET A POST
	@GetMapping ("/post/{id}")
	public Post getPost(@PathVariable(value = "id") int id){
		try {
			return service.getPostById(id);
		} catch (Exception e) {
			return null;
		}
	}
	//GET ALL POSTS
	@GetMapping ("/posts")
	public List<Post> posts(){
		return service.getAllPosts();
	}
	
	//GET ALL USER'S POSTS
	@GetMapping ("/user-posts/{user_id}")
	public List<Post> getUsersPosts(@PathVariable(value = "user_id") Long user_id){
		return service.getUsersPosts(user_id);
	}
	
//	@PutMapping("/posts")
//	public boolean EditPost(@RequestBody Post post) {
//		try{
//			for (Post p : posts) {
//				if(p.getId() == post.getId()) {
////					p.setContent(post.getContent());
//					return true;
//				}
//			}
//			return false;	
//		}catch (Exception e) {
//			return false;
//		}
//	}
	

	@DeleteMapping("/posts/{id}")
	public boolean DeletePost(@PathVariable(value="id") int id) {
		try{
			service.deletePost(id);
			return true;
			
		}catch (Exception e) {
			return false;
		}
		
	}
	
	////////////////////////////////////////////////////////////////////
	//////////-------COMMENTS-------///////////////////
	////////////////////////////////////////////////////////////////////
	
	//CREATE NEW COMMENT
	@PostMapping("/comments")
	public boolean addComment(@RequestBody Comment comment) {
		try{
			service.addComment(comment);
			return true;
		}catch (Exception e) {
			return false;
		}
	}
	
	//GET A COMMENT
	@GetMapping ("/comment/{id}")
	public Comment getComment(@PathVariable(value = "id") int id){
		try {
			return service.getCommentById(id);
		} catch (Exception e) {
			return null;
		}
	}
	//GET POST'S COMMENTS
	@GetMapping ("/comments/{post_id}")
	public List<Comment> comments(@PathVariable(value="post_id") Long id){
		return service.getPostsComments(id);
	}
	
//	@PutMapping("/posts")
//	public boolean EditPost(@RequestBody Post post) {
//		try{
//			for (Post p : posts) {
//				if(p.getId() == post.getId()) {
////					p.setContent(post.getContent());
//					return true;
//				}
//			}
//			return false;	
//		}catch (Exception e) {
//			return false;
//		}
//	}
	
	
	//DELETE A COMMENT
	@DeleteMapping("/comments/{id}")
	public boolean DeleteComment(@PathVariable(value="id") int id) {
		try{
			service.deleteComment(id);
			return true;
			
		}catch (Exception e) {
			return false;
		}
		
	}
	
	

}
