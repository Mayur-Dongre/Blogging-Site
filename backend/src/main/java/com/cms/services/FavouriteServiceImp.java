package com.cms.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cms.dao.BlogDao;
import com.cms.dao.FavouriteDao;
import com.cms.dao.UserDao;
import com.cms.dto.FavouriteDto;
import com.cms.models.Blog;
import com.cms.models.Favourite;
import com.cms.models.User;

@Service
public class FavouriteServiceImp implements FavouriteService {

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private BlogDao bdao;
	@Autowired
	private UserDao udao;
	@Autowired
	private FavouriteDao fdao;
	
	@Override
	public String addLike(FavouriteDto fdto) {
		Blog blog = bdao.findById(fdto.getBlogId()).orElse(null);
		User user = udao.findById(fdto.getUserId()).orElse(null);
		
		if (blog!=null && user!=null) {
			try {
				Favourite mappedFav = mapper.map(fdto, Favourite.class);
				mappedFav.setBlog(blog);
				mappedFav.setUser(user);
				
				fdao.save(mappedFav);
				return "Post Liked !!!";
				
			} catch (Exception e) {
				return "Something went wrong";
			}
		}
		else if (blog==null) {
			return "Blog not Found";
		}
		else {
			return "User not Found";
		}
	}

}
