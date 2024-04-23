package com.capstone.all4seoul.place.service;

import com.capstone.all4seoul.place.dto.response.DetailPlaceResponse;
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

    public DetailPlaceResponse findById(Long placeId) {
        return DetailPlaceResponse.of(
                placeRepository.findById(placeId)
                        .orElseThrow(() -> new EntityNotFoundException("장소를 찾을 수 없습니다."))
        );
    }

    public List<DetailPlaceResponse> findAll() {
        return placeRepository.findAll()
                .stream()
                .map(DetailPlaceResponse::of)
                .toList();
    }

    public List<DetailPlaceResponse> findPlacesByName(String name) {
        return placeRepository.findByName(name)
                .stream()
                .map(DetailPlaceResponse::of)
                .toList();
    }
}
