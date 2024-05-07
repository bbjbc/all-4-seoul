package com.capstone.all4seoul.review.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateReviewRequestForEvent {
    @NotBlank(message = "id를 입력해주세요.")
    private Long id;

    @NotBlank(message = "리뷰 내용을 입력해주세요.")
    private String content;

    @NotBlank(message = "별점을 입력해주세요.")
    private Double starRating;
}
