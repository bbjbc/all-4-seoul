package com.capstone.all4seoul.place.dto.response;

import com.capstone.all4seoul.seoulCityData.MajorPlace;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MajorPlaceResponse {
    private String category;
    private String areaName;


    public static MajorPlaceResponse of(MajorPlace majorPlace) {
        MajorPlaceResponse majorPlaceResponse = new MajorPlaceResponse();

        majorPlaceResponse.category = majorPlace.getCategory();
        majorPlaceResponse.areaName = majorPlace.getAreaName();

        return majorPlaceResponse;
    }
}
