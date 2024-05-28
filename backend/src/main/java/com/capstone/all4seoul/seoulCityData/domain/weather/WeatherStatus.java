package com.capstone.all4seoul.seoulCityData.domain.weather;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WeatherStatus {
    private String time;

    private String temperature;

    private String sensibleTemperature;

    private String maximumTemperature;

    private String minimumTemperature;

    private String humidity;

    private String precipitation;

    private String precipitationType;

    private String precipitationMessage;

    private String uvIndexLevel;

    private String uvIndex;

    private String uvMessage;

    private String pm25Index;

    private String pm25;

    private String pm10Index;

    private String pm10;

    private String airIndex;

    private String airIndexMvl;

    private String airIndexMain;

    private String airMessage;

    private List<WeatherForecast> weatherForecasts = new ArrayList<>();

    public static WeatherStatus createWeatherStatus(
            String weatherTime,
            String temperature,
            String sensibleTemperature,
            String maximumTemperature,
            String minimumTemperature,
            String humidity,
            String precipitation,
            String precipitationType,
            String precipitationMessage,
            String uvIndexLevel,
            String uvIndex,
            String uvMessage,
            String pm25Index,
            String pm25,
            String pm10Index,
            String pm10,
            String airIndex,
            String airIndexMvl,
            String airIndexMain,
            String airMessage,
            List<WeatherForecast> weatherForecasts
    ) {
        WeatherStatus weatherStatus = new WeatherStatus();

        weatherStatus.time = weatherTime;
        weatherStatus.temperature = temperature;
        weatherStatus.sensibleTemperature = sensibleTemperature;
        weatherStatus.maximumTemperature = maximumTemperature;
        weatherStatus.minimumTemperature = minimumTemperature;
        weatherStatus.humidity = humidity;
        weatherStatus.precipitation = precipitation;
        weatherStatus.precipitationType = precipitationType;
        weatherStatus.precipitationMessage = precipitationMessage;
        weatherStatus.uvIndexLevel = uvIndexLevel;
        weatherStatus.uvIndex = uvIndex;
        weatherStatus.uvMessage = uvMessage;
        weatherStatus.pm25Index = pm25Index;
        weatherStatus.pm25 = pm25;
        weatherStatus.pm10Index = pm10Index;
        weatherStatus.pm10 = pm10;
        weatherStatus.airIndex = airIndex;
        weatherStatus.airIndexMvl = airIndexMvl;
        weatherStatus.airIndexMain = airIndexMain;
        weatherStatus.airMessage = airMessage;
        weatherStatus.weatherForecasts = weatherForecasts;

        return weatherStatus;
    }
}
