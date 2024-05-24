package com.capstone.all4seoul.place.dto.response;

import com.capstone.all4seoul.place.domain.Place;
import com.capstone.all4seoul.place.dto.response.externalApi.PlaceTextSearchResponseByGoogle;
import com.capstone.all4seoul.review.dto.response.ReviewResponse;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PlaceResponse {
    private Long id;
    private int bookmarkCount;
    private List<ReviewResponse> reviews;
    private PlaceTextSearchResponseByGoogle googleInfo;
    private MajorPlaceResponse majorPlace;

    public static PlaceResponse of(Place place, PlaceTextSearchResponseByGoogle googleAdditionalInfo) {
        PlaceResponse placeResponse = new PlaceResponse();

        placeResponse.id = place.getId();
        placeResponse.bookmarkCount = place.getBookmarks().size();
        placeResponse.reviews = place.getReviews().stream()
                .map(ReviewResponse::of)
                .toList();
        placeResponse.googleInfo = googleAdditionalInfo;
        if (place.getMajorPlace() != null) {
            placeResponse.majorPlace = MajorPlaceResponse.of(place.getMajorPlace());
        }

        return placeResponse;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class GoogleAdditionalInfo {
        private String address;
        private double x;
        private double y;
        private String websiteUri;
        private String category;

        public static GoogleAdditionalInfo of(
                String address,
                double x,
                double y,
                String websiteUri,
                String category
        ) {
            GoogleAdditionalInfo googleAdditionalInfo = new GoogleAdditionalInfo();

            googleAdditionalInfo.address = address;
            googleAdditionalInfo.x = x;
            googleAdditionalInfo.y = y;
            googleAdditionalInfo.websiteUri = websiteUri;
            googleAdditionalInfo.category = category;

            return googleAdditionalInfo;
        }
    }
}
