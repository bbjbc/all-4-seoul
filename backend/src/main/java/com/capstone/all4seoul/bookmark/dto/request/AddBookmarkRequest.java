package com.capstone.all4seoul.bookmark.dto.request;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class AddBookmarkRequest {
    private Long userId;
    private Long placeId;
}
