package com.cms.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.dao.BlogDao;
import com.cms.dao.CommentDao;
import com.cms.dao.UserDao;
import com.cms.dto.CommentDto;
import com.cms.models.Blog;
import com.cms.models.Comment;
import com.cms.models.User;

@Service
public class CommentServiceImp implements CommentService {
	
	@Autowired
	private CommentDao cdao;
	@Autowired
	private BlogDao bdao;
	@Autowired
	private UserDao udao;
	@Autowired
	private ModelMapper mapper;

	@Override
	public String addComment(CommentDto comment) {
		
		Blog blog = bdao.findById(comment.getBlogId()).orElse(null);
		User user = udao.findById(comment.getUserId()).orElse(null);
		
		if (blog!=null && user!=null) {
			try {
				
					Comment mappedComment = mapper.map(comment, Comment.class);
					mappedComment.setBlog(blog);
					mappedComment.setUser(user);
					
					cdao.save(mappedComment);
					return "Comment added";
				
				} catch (Exception e) {
					return "Comment not added";
			}
		}
		else if (blog==null){
			return "Blog not Found";
		}
		else {
			return "User not Found";
		}
			
	}

}
