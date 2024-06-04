package com.capstone.all4seoul.place.controller;

import com.capstone.all4seoul.place.dto.request.PlaceNearbySearchRequestByGoogle;
import com.capstone.all4seoul.place.dto.response.MajorPlaceResponse;
import com.capstone.all4seoul.place.dto.response.MultiPlaceResponse;
import com.capstone.all4seoul.place.dto.response.PlaceResponse;
import com.capstone.all4seoul.place.dto.response.externalApi.PlaceNearbySearchResponseByGoogle;
import com.capstone.all4seoul.place.dto.response.externalApi.PlaceSearchResponseBySeoulDataApi;
import com.capstone.all4seoul.place.dto.response.externalApi.PlaceTextSearchResponseByGoogle;
import com.capstone.all4seoul.place.service.PlaceService;
import com.capstone.all4seoul.place.service.PlaceServiceByExternalApi;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/places")
public class PlaceController {
    private final PlaceService placeService;
    private final PlaceServiceByExternalApi placeServiceByExternalApi;

    /**
     * 장소 단건 조회
     */
    @GetMapping("/{placeName}")
    public PlaceResponse findPlace(@PathVariable String placeName) {
        PlaceTextSearchResponseByGoogle googleInfo = placeServiceByExternalApi.searchPlacesByTextQuery(placeName);
        MajorPlaceResponse majorPlace;
        try {
             majorPlace = placeServiceByExternalApi.getMajorPlace(placeName);
        } catch (IllegalArgumentException exception) {
            majorPlace = null;
        }

        return PlaceResponse.of(googleInfo, majorPlace);
    }

    /**
     * 이름으로 구글 장소 조회
     */
    @GetMapping("/google/{placeName}")
    public PlaceTextSearchResponseByGoogle getPlace(@PathVariable String placeName) {
        return placeServiceByExternalApi.searchPlacesByTextQuery(placeName);
    }

    /**
     * 전체 장소 조회
     */
    @GetMapping("")
    public MultiPlaceResponse getAllPlaces() {
        return placeService.findAll();
    }

    /**
     * 장소 이름으로 장소 목록 조회
     */
//    @GetMapping("/{name}")
//    public MultiPlaceResponse getPlacesByName(@PathVariable String name) {
//        return placeService.findPlacesByName(name);
//    }

    /**
     * 구글 API 장소 검색
     */
    @PostMapping("/search/google")
    public PlaceTextSearchResponseByGoogle searchPlacesByGoogleTextQuery(@RequestParam String textQuery) {
        return placeServiceByExternalApi.searchPlacesByTextQuery(textQuery);
    }

    @PostMapping("/google")
    public PlaceNearbySearchResponseByGoogle searchPlacesByGoogle(@RequestBody PlaceNearbySearchRequestByGoogle placeNearbySearchRequestByGoogle) {
        return placeServiceByExternalApi.searchPlaces(placeNearbySearchRequestByGoogle);
    }

    @GetMapping("/seoulData")
    public PlaceSearchResponseBySeoulDataApi searchPlacesBySeoulDataApi() {
        return placeServiceByExternalApi.searchPlacesBySeoulDataApi("광화문·덕수궁");
    }

    @PostMapping("/search/textQuery")
    public ResponseEntity<MultiPlaceResponse> searchPlaceByTextQuery(@RequestParam String query) {
            return ResponseEntity.ok(placeService.findByTextQuery(query));
    }

    @PostMapping("/search/category")
    public ResponseEntity<MultiPlaceResponse> searchPlaceByCategory(
            @RequestParam String category,
            @RequestParam Double xStart,
            @RequestParam Double xEnd,
            @RequestParam Double yStart,
            @RequestParam Double yEnd
    ) {
            return ResponseEntity.ok(placeService.findByCategory(category, xStart, xEnd, yStart, yEnd));
    }
}