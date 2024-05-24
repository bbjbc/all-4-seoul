package com.capstone.all4seoul.seoulCityData.charger.repository;

import com.capstone.all4seoul.seoulCityData.charger.domain.ChargerStation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ChargerStationRepository extends JpaRepository<ChargerStation, Long> {
    @Transactional
    @Modifying
    @Query("update ChargerStation c set c.latest = false where c.latest = true")
    void updateLatestByLatestTrue();
}