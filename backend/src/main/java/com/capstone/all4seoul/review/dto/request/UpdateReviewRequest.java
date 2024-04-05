package com.capstone.all4seoul.review.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateReviewRequest {
    private String content;
    private Double starRating;
}
