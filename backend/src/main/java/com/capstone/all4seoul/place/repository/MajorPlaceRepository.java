package com.capstone.all4seoul.place.repository;

import com.capstone.all4seoul.seoulCityData.MajorPlace;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MajorPlaceRepository extends JpaRepository<MajorPlace, Long> {
    boolean existsByAreaName(String areaName);
    Optional<MajorPlace> findByAreaNameContains(String areaName);

    Optional<MajorPlace> findFirstByAreaNameContains(String areaName);


}
