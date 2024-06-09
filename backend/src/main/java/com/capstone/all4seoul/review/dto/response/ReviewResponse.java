package com.capstone.all4seoul.review.dto.response;

import com.capstone.all4seoul.review.domain.Review;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ReviewResponse {
    private String author;
    private Double starRating;
    private String content;

    public static ReviewResponse of(Review review) {
        ReviewResponse reviewResponse = new ReviewResponse();

        reviewResponse.author = review.getUser().getNickname();
        reviewResponse.starRating = review.getStarRating();
        reviewResponse.content = review.getContent();

        return reviewResponse;
    }
}
