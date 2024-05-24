package com.capstone.all4seoul.seoulCityData.population.repository;

import com.capstone.all4seoul.seoulCityData.population.domain.PopulationForecast;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.transaction.annotation.Transactional;

public interface PopulationForecastRepository extends Repository<PopulationForecast, Long> {
    @Transactional
    @Modifying
    @Query("update PopulationForecast p set p.latest = false where p.latest = true")
    void updateLatestByLatestTrue();
}
