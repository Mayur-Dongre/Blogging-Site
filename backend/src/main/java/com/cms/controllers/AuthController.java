package com.cms.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cms.dto.LogInDto;
import com.cms.jwtutils.JwtUtils;
import com.cms.services.LogInService;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private LogInService lser;
	
	@Autowired
	public AuthenticationManager amgr;

	@Autowired
	public JwtUtils jwtutil;
	
	@PostMapping("/login")
	public String logIn(@RequestBody LogInDto cred) {
		UsernamePasswordAuthenticationToken unauthorizedUser = new UsernamePasswordAuthenticationToken(cred.getEmail(), cred.getPassword());
		Authentication authorizedUser = amgr.authenticate(unauthorizedUser);
		
		String jwtToken = jwtutil.generateJwtToken(authorizedUser);
		return jwtToken;
	}
	
	@GetMapping("/test")
	public String test() {
		
		return "Test is Working";
	}
}
