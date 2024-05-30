package com.capstone.all4seoul.seoulCityData.repository;

import com.capstone.all4seoul.seoulCityData.domain.MajorPlace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface MajorPlaceRepository extends JpaRepository<MajorPlace, Long> {
    Optional<MajorPlace> findFirstByAreaNameContains(String areaName);

    @Transactional
    @Modifying
    @Query("UPDATE MajorPlace m SET m.latest = FALSE WHERE m.latest = TRUE")
    void updateLatestFalseIfTrue();
}
