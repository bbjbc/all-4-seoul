package com.capstone.all4seoul.place.dto.response.externalApi;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PlaceImageSearchResponseByGoogle {
    private String name;
    private String photoUri;
}
