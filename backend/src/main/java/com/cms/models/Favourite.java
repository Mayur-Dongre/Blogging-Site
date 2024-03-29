package com.cms.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(
		name="favourites",
		uniqueConstraints = {
			        			@UniqueConstraint(columnNames = {"blog_id", "user_id"})
			    			}
		)

public class Favourite {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) 
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="blog_id")
	private Blog blog;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;

	public Favourite(Blog blog, User user) {
		super();
		this.blog = blog;
		this.user = user;
	}

	public Favourite() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Blog getBlog() {
		return blog;
	}

	public void setBlog(Blog blog) {
		this.blog = blog;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
	
}
