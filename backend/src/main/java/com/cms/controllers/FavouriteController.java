package com.cms.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cms.dto.FavouriteDto;
import com.cms.services.FavouriteService;

@CrossOrigin("*")
@RestController
@RequestMapping("/cms/like")
public class FavouriteController {
	
	@Autowired
	private FavouriteService fser;

	@PostMapping("/blog")
	public String likeBlog(@RequestBody FavouriteDto fdto) {
		
		return fser.addLike(fdto);
	}
}
