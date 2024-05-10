package com.capstone.all4seoul.place.controller;

import com.capstone.all4seoul.place.dto.request.PlaceSearchRequest;
import com.capstone.all4seoul.place.dto.response.DetailPlaceResponse;
import com.capstone.all4seoul.place.dto.response.PlaceSearchResponseByGoogle;
import com.capstone.all4seoul.place.dto.response.PlaceSearchResponseBySeoulDataApi;
import com.capstone.all4seoul.place.service.PlaceService;
import com.capstone.all4seoul.place.service.PlaceServiceByExternalApi;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/places")
public class PlaceController {
    private final PlaceService placeService;

    /**
     * 장소 단건 조회
     */
    @GetMapping("/{placeId}")
    public DetailPlaceResponse getPlace(@PathVariable Long placeId) {
        return placeService.findById(placeId);
    }

    /**
     * 전체 장소 조회
     */
    @GetMapping("")
    public List<DetailPlaceResponse> getAllPlaces() {
        return placeService.findAll();
    }

    /**
     * 장소 이름으로 장소 목록 조회
     */
    @GetMapping("/{name}")
    public List<DetailPlaceResponse> getPlacesByName(@PathVariable String name) {
        return placeService.findPlacesByName(name);
    }

    /**
     * 구글 API 장소 검색
     */
    @PostMapping("/google")
    public PlaceSearchResponseByGoogle searchPlacesByGoogle(@RequestBody PlaceSearchRequest placeSearchRequest) {
        return PlaceServiceByExternalApi.searchPlaces(placeSearchRequest);
    }

    @GetMapping("/seoulData")
    public PlaceSearchResponseBySeoulDataApi searchPlacesBySeoulDataApi() {
        return PlaceServiceByExternalApi.searchPlacesBySeoulDataApi();
    }
}
