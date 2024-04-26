package com.capstone.all4seoul.place.service;

import com.capstone.all4seoul.place.dto.request.PlaceSearchRequest;
import com.capstone.all4seoul.place.dto.response.PlaceSearchResponseByGoogle;
import com.capstone.all4seoul.place.dto.response.PlaceSearchResponseBySeoulDataApi;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PlaceServiceByExternalApi {

    private static String googleApiKey = "AIzaSyDQ4l4GsWb9nJpXCzfXV7igshaJ8U1aopE";
    private static String seoulDataApiKey = "47725179416177663634557a734f45";

    public static PlaceSearchResponseByGoogle searchPlaces(PlaceSearchRequest placeSearchRequest) {
        String url = "https://places.googleapis.com/v1/places:searchNearby";

        // 요청 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-Goog-Api-Key", googleApiKey);
        headers.set("X-Goog-FieldMask", "places.displayName,places.id,places.currentOpeningHours,places.nationalPhoneNumber,places.reviews,places.rating,places.websiteUri");

        HttpEntity<PlaceSearchRequest> requestEntity = new HttpEntity<>(placeSearchRequest, headers);

        // HTTP 요청 보내기
        ResponseEntity<PlaceSearchResponseByGoogle> responseEntity = new RestTemplate().exchange(
                url,
                HttpMethod.POST,
                requestEntity,
                PlaceSearchResponseByGoogle.class
        );

        // 응답 처리
        return responseEntity.getBody();
    }

    public static PlaceSearchResponseBySeoulDataApi searchPlacesBySeoulDataApi() {
        RestTemplate restTemplate = new RestTemplate();

        String keyword = "광화문·덕수궁";
        String url = "http://openapi.seoul.go.kr:8088/" + seoulDataApiKey + "/json/citydata/1/5/" + keyword;

        ResponseEntity<PlaceSearchResponseBySeoulDataApi> responseEntity = restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                PlaceSearchResponseBySeoulDataApi.class
        );

        String areaCongestLevel = responseEntity.getBody().getCityData().getLivePopulation().get(0).getAreaCongestLevel();

        return responseEntity.getBody();
    }
}
