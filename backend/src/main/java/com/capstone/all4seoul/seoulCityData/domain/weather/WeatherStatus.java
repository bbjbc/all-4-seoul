package com.capstone.all4seoul.seoulCityData.domain.weather;

import com.capstone.all4seoul.place.dto.response.externalApi.PlaceSearchResponseBySeoulDataApi;
import com.capstone.all4seoul.seoulCityData.domain.MajorPlace;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Table(name = "weather_statuses")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WeatherStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "weather_status_id")
    private Long id;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "major_place_id")
    private MajorPlace majorPlace;

    @OneToMany(mappedBy = "weatherStatus", cascade = CascadeType.ALL)
    private List<WeatherForecast> weatherForecasts = new ArrayList<>();

    public static WeatherStatus createWeatherStatus(
            PlaceSearchResponseBySeoulDataApi.CityData.WeatherStatus fetchedWeatherStatus,
            List<WeatherForecast> weatherForecasts
    ) {
        WeatherStatus weatherStatus = new WeatherStatus();

        weatherStatus.time = fetchedWeatherStatus.getTime();
        weatherStatus.temperature = fetchedWeatherStatus.getTemperature();
        weatherStatus.sensibleTemperature = fetchedWeatherStatus.getSensibleTemperature();
        weatherStatus.maximumTemperature = fetchedWeatherStatus.getMaximumTemperature();
        weatherStatus.minimumTemperature = fetchedWeatherStatus.getMinimumTemperature();
        weatherStatus.humidity = fetchedWeatherStatus.getHumidity();
        weatherStatus.precipitation = fetchedWeatherStatus.getPrecipitation();
        weatherStatus.precipitationType = fetchedWeatherStatus.getPrecipitationType();
        weatherStatus.precipitationMessage = fetchedWeatherStatus.getPrecipitationMessage();
        weatherStatus.uvIndexLevel = fetchedWeatherStatus.getUvIndexLevel();
        weatherStatus.uvIndex = fetchedWeatherStatus.getUvIndex();
        weatherStatus.uvMessage = fetchedWeatherStatus.getUvMessage();
        weatherStatus.pm25Index = fetchedWeatherStatus.getPm25Index();
        weatherStatus.pm25 = fetchedWeatherStatus.getPm25();
        weatherStatus.pm10Index = fetchedWeatherStatus.getPm10Index();
        weatherStatus.pm10 = fetchedWeatherStatus.getPm10();
        weatherStatus.airIndex = fetchedWeatherStatus.getAirIndex();
        weatherStatus.airIndexMvl = fetchedWeatherStatus.getAirIndexMvl();
        weatherStatus.airIndexMain = fetchedWeatherStatus.getAirIndexMain();
        weatherStatus.airMessage = fetchedWeatherStatus.getAirMessage();
        weatherStatus.weatherForecasts = weatherForecasts;

        return weatherStatus;
    }

    @Entity
    @Getter
    @Table(name = "weather_forecasts")
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class WeatherForecast {
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

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "weather_status")
        private WeatherStatus weatherStatus;

        public static WeatherForecast createWeatherForecast(
                PlaceSearchResponseBySeoulDataApi.CityData.WeatherStatus.Forecast24Hour fetchedForecast24Hour
        ) {
            WeatherForecast weatherForecast = new WeatherForecast();

            weatherForecast.dayTime = fetchedForecast24Hour.getDayTime();
            weatherForecast.temperature24Hour = fetchedForecast24Hour.getTemperature24Hour();
            weatherForecast.precipitation = fetchedForecast24Hour.getPrecipitation();
            weatherForecast.precipitationType = fetchedForecast24Hour.getPrecipitationType();
            weatherForecast.rainChance = fetchedForecast24Hour.getRainChance();
            weatherForecast.skyStatus = fetchedForecast24Hour.getSkyStatus();

            return weatherForecast;
        }
    }

}
