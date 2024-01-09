package com.cms.dto;

public class FavouriteDto {

	private long BlogId;
	
	private long UserId;

	public long getBlogId() {
		return BlogId;
	}

	public void setBlogId(long blogId) {
		BlogId = blogId;
	}

	public long getUserId() {
		return UserId;
	}

	public void setUserId(long userId) {
		UserId = userId;
	}

	public FavouriteDto(long blogId, long userId) {
		super();
		BlogId = blogId;
		UserId = userId;
	}

	public FavouriteDto() {
		super();
	}
	
	
}
