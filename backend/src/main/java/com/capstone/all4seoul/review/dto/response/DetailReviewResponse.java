package com.capstone.all4seoul.review.dto.response;

import com.capstone.all4seoul.review.domain.Review;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DetailReviewResponse {
    private String author;
    private Double starRating;
    private String content;

    public static DetailReviewResponse of(Review review) {
        DetailReviewResponse detailReviewResponse = new DetailReviewResponse();

        detailReviewResponse.author = review.getUser().getNickname();
        detailReviewResponse.starRating = review.getStarRating();
        detailReviewResponse.content = review.getContent();

        return detailReviewResponse;
    }
}
