package com.capstone.all4seoul.seoulCityData.population.repository;

import com.capstone.all4seoul.seoulCityData.population.domain.LivePopulationStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface PopulationStatusRepository extends JpaRepository<LivePopulationStatus, Long> {
    @Transactional
    @Modifying
    @Query("update LivePopulationStatus l set l.latest = false where l.latest = true")
    void updateLatestByLatestTrue();
}
