package com.capstone.all4seoul.seoulCityData.weather.repository;

import com.capstone.all4seoul.seoulCityData.weather.domain.WeatherForecast;
import com.capstone.all4seoul.seoulCityData.weather.domain.WeatherStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface WeatherForecastRepository extends JpaRepository<WeatherForecast, Long> {
    @Transactional
    @Modifying
    @Query("update WeatherForecast w set w.latest = false where w.latest = true")
    void updateLatestByLatestTrue();
}
