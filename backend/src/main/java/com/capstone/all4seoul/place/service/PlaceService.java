package com.capstone.all4seoul.place.service;

import com.capstone.all4seoul.event.dto.response.DetailEventResponse;
import com.capstone.all4seoul.place.domain.Category;
import com.capstone.all4seoul.place.domain.Place;
import com.capstone.all4seoul.place.dto.response.MultiPlaceResponse;
import com.capstone.all4seoul.place.dto.response.PlaceResponse;
import com.capstone.all4seoul.place.repository.MajorPlaceRepository;
import com.capstone.all4seoul.place.repository.PlaceRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PlaceService {
    private final PlaceRepository placeRepository;
    private final MajorPlaceRepository majorPlaceRepository;

    public Place findById(Long placeId) {
        return placeRepository.findById(placeId)
                .orElseThrow(() -> new EntityNotFoundException("장소를 찾을 수 없습니다."));
    }

    public MultiPlaceResponse findByTextQuery(String textQuery) {
        return MultiPlaceResponse.of(
                placeRepository.findByNameContains(textQuery)
                        .stream()
                        .toList()
        );
    }

    public MultiPlaceResponse findByCategory(String category, Double xStart, Double xEnd, Double yStart, Double yEnd) {
        return MultiPlaceResponse.of(placeRepository.findByXBetweenAndYBetween(xStart, xEnd, yStart, yEnd)
                .stream()
                .filter(place -> place.getCategory().equals(Category.valueOf(category)))
                .toList()
        );
    }

    public MultiPlaceResponse findAll() {
        return MultiPlaceResponse.of(
                placeRepository.findAll()
                        .stream()
                        .toList()
        );
    }

    public MultiPlaceResponse findPlacesByName(String name) {
        return MultiPlaceResponse.of(
                placeRepository.findByName(name)
                        .stream()
                        .toList()
        );
    }
}
