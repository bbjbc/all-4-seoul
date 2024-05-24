package com.capstone.all4seoul.place.repository;

import com.capstone.all4seoul.place.domain.Category;
import com.capstone.all4seoul.place.domain.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaceRepository extends JpaRepository<Place, Long> {
    List<Place> findAll();
    List<Place> findByName(String name);
    List<Place> findByNameContains(String name);

    List<Place> findByXBetweenAndYBetween(Double xStart, Double xEnd, Double yStart, Double yEnd);

    List<Place> findByCategory(Category category);

    void deleteById(Long placeId);
}
