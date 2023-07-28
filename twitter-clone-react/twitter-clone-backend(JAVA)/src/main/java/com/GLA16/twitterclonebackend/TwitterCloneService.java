package com.GLA16.twitterclonebackend;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TwitterCloneService {
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private PostRepository postRepo;
	
	@Autowired
	private CommentRepository commentRepo;
	
////////////////////////////////////////////////////////////////////////////
////////---------USERS----------////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

	
	public void addUser(User u) {
		userRepo.save(u);
	}
	
	public void deleteUser(int id) {
		userRepo.deleteById(id);
	}
	
	public void updateUser(User u) {
//		userRepo.save(u);
	}
	
	public User getUserById(int id) {
		return userRepo.findById(id).get();
	}
	
	public User getUserByEmail(String email) {
		User user = null;
		for (User u : userRepo.findAll()) {
			if(u.getEmail().equals(email)) {
				user = u;
			}
		}
		return user;
	}
	
	public User getUserByUsername(String Username) {
		User user = null;
		for (User u : userRepo.findAll()) {
			if(u.getUsername().equals(Username)) {
				user = u;
			}
		}
		return user;
	}
	
	public long authenticateUser(User user) {
		
		User registeredUser = getUserByUsername(user.getUsername());

		if(registeredUser.getPassword().equals(user.getPassword())) {
			return registeredUser.getId();
		}
		else {
			return 0;
		}
	}
	
	public List<User> getAllUsers() {		
		return userRepo.findAll();
	}
	
////////////////////////////////////////////////////////////////////////////
////////---------POSTS----------////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
	
	//ADD A POST
	public void addPost(Post p) {
		postRepo.save(p);
	}
	
	//GET POST BY ID
	public Post getPostById(int id) {
		return postRepo.findById(id).get();
	}
	
	//GET ALL POSTS
	public List<Post> getAllPosts() {		
		return postRepo.findAll();
	}
	
	//GET A USER'S POSTS
	public List<Post> getUsersPosts(Long user_id) {
		List<Post> posts = new ArrayList<Post>();
		for (Post p : postRepo.findAll()) {
			if(p.getAuthor_id() == user_id) {
				posts.add(p);
			}
		}
		return posts;
	}
	
	//DELETE A POST
	public void deletePost(int id) {
		postRepo.deleteById(id);
	}

//	public void updatePost(Post p) {
////		postRepo.save(p);
//	}

////////////////////////////////////////////////////////////////////////////
////////---------COMMENTS----------////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

	
	//ADD A COMMENT
	public void addComment(Comment c) {
		commentRepo.save(c);
	}
	
	//GET COMMENT BY ID
	public Comment getCommentById(int id) {
		return commentRepo.findById(id).get();
	}
	
	//GET ALL COMMENTS
	public List<Comment> getAllComments() {		
		return commentRepo.findAll();
	}
	
	//GET A POST'S COMMENTS
	public List<Comment> getPostsComments(Long post_id) {
		List<Comment> comments = new ArrayList<Comment>();
		for (Comment c : commentRepo.findAll()) {
			if(c.getPost_id() == post_id) {
				comments.add(c);
			}
		}
		return comments;
	}

	//DELETE A COMMENT
	public void deleteComment(int id) {
		commentRepo.deleteById(id);
	}


}
