package com.capstone.all4seoul.seoulCityData.weather.domain;

import com.capstone.all4seoul.common.domain.BaseTimeEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Table(name = "weather_forecasts")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WeatherForecast extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "weather_forecast_id")
    private Long id;

    private String dayTime;

    private String temperature24Hour;

    private String precipitation;

    private String precipitationType;

    private String rainChance;

    private String skyStatus;

    @ManyToOne
    @JoinColumn(name = "weather_status_id", nullable = false, updatable = false)
    private WeatherStatus weatherStatus;

    public static WeatherForecast createWeatherForecast(
            String dayTime,
            String temperature24Hour,
            String precipitation,
            String precipitationType,
            String rainChance,
            String skyStatus,
            WeatherStatus weatherStatus
    ) {
        WeatherForecast weatherForecast = new WeatherForecast();

        weatherForecast.dayTime = dayTime;
        weatherForecast.temperature24Hour = temperature24Hour;
        weatherForecast.precipitation = precipitation;
        weatherForecast.precipitationType = precipitationType;
        weatherForecast.rainChance = rainChance;
        weatherForecast.skyStatus = skyStatus;
        weatherForecast.setWeatherStatus(weatherStatus);

        return weatherForecast;
    }

    /**
     * 연관관계 편의 메소드
     */
    public void setWeatherStatus(WeatherStatus weatherStatus) {
        this.weatherStatus = weatherStatus;
        weatherStatus.getWeatherForecasts().add(this);
    }
}
