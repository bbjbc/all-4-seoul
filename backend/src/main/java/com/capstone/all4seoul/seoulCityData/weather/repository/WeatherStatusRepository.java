package com.capstone.all4seoul.seoulCityData.weather.repository;

import com.capstone.all4seoul.seoulCityData.weather.domain.WeatherStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface WeatherStatusRepository extends JpaRepository<WeatherStatus, Long> {
    @Transactional
    @Modifying
    @Query("update WeatherStatus w set w.latest = false where w.latest = true")
    void updateLatestByLatestTrue();
}
