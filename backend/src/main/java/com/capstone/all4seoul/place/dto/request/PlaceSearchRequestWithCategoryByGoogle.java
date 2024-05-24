package com.capstone.all4seoul.place.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PlaceSearchRequestWithCategoryByGoogle {
//    private List<String> includedTypes;
    private String textQuery;
    private String languageCode;
}