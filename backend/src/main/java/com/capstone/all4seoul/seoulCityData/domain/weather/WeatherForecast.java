package com.capstone.all4seoul.seoulCityData.domain.weather;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WeatherForecast {
    private String dayTime;

    private String temperature24Hour;

    private String precipitation;

    private String precipitationType;

    private String rainChance;

    private String skyStatus;

    public static WeatherForecast createWeatherForecast(
            String dayTime,
            String temperature24Hour,
            String precipitation,
            String precipitationType,
            String rainChance,
            String skyStatus
    ) {
        WeatherForecast weatherForecast = new WeatherForecast();

        weatherForecast.dayTime = dayTime;
        weatherForecast.temperature24Hour = temperature24Hour;
        weatherForecast.precipitation = precipitation;
        weatherForecast.precipitationType = precipitationType;
        weatherForecast.rainChance = rainChance;
        weatherForecast.skyStatus = skyStatus;

        return weatherForecast;
    }
}
