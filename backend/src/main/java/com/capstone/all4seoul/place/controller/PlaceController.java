package com.capstone.all4seoul.place.controller;

import com.capstone.all4seoul.place.dto.response.DetailPlaceResponse;
import com.capstone.all4seoul.place.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PlaceController {
    private final PlaceService placeService;

    //전체 장소 조회
    @GetMapping("/places")
    public List<DetailPlaceResponse> getAllPlaces() {
        return placeService.findAll();
    }

    //장소 이름으로 장소 리스트 조회
    @GetMapping("/places/{name}")
    public List<DetailPlaceResponse> getPlacesByName(@PathVariable String name) {
        return placeService.findPlacesByName(name);
    }
}
