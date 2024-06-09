package com.capstone.all4seoul.seoulCityData.domain.weather;

import com.capstone.all4seoul.place.dto.response.externalApi.PlaceSearchResponseBySeoulDataApi;
import com.capstone.all4seoul.seoulCityData.domain.MajorPlace;
import com.capstone.all4seoul.seoulCityData.domain.population.LivePopulationStatus;
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

    public WeatherStatus(
            PlaceSearchResponseBySeoulDataApi.CityData.WeatherStatus fetchedWeatherStatus,
            List<WeatherForecast> weatherForecasts
    ) {
        this.time = fetchedWeatherStatus.getTime();
        this.temperature = fetchedWeatherStatus.getTemperature();
        this.sensibleTemperature = fetchedWeatherStatus.getSensibleTemperature();
        this.maximumTemperature = fetchedWeatherStatus.getMaximumTemperature();
        this.minimumTemperature = fetchedWeatherStatus.getMinimumTemperature();
        this.humidity = fetchedWeatherStatus.getHumidity();
        this.precipitation = fetchedWeatherStatus.getPrecipitation();
        this.precipitationType = fetchedWeatherStatus.getPrecipitationType();
        this.precipitationMessage = fetchedWeatherStatus.getPrecipitationMessage();
        this.uvIndexLevel = fetchedWeatherStatus.getUvIndexLevel();
        this.uvIndex = fetchedWeatherStatus.getUvIndex();
        this.uvMessage = fetchedWeatherStatus.getUvMessage();
        this.pm25Index = fetchedWeatherStatus.getPm25Index();
        this.pm25 = fetchedWeatherStatus.getPm25();
        this.pm10Index = fetchedWeatherStatus.getPm10Index();
        this.pm10 = fetchedWeatherStatus.getPm10();
        this.airIndex = fetchedWeatherStatus.getAirIndex();
        this.airIndexMvl = fetchedWeatherStatus.getAirIndexMvl();
        this.airIndexMain = fetchedWeatherStatus.getAirIndexMain();
        this.airMessage = fetchedWeatherStatus.getAirMessage();
        setWeatherForecasts(weatherForecasts);
    }

    public void setMajorPlace(MajorPlace majorPlace) {
        this.majorPlace = majorPlace;
        majorPlace.getWeatherStatuses().add(this);
    }

    private void setWeatherForecasts(List<WeatherForecast> weatherForecasts) {
        weatherForecasts.stream()
                .forEach(weatherForecast -> weatherForecast.setWeatherStatus(this));
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

        private void setWeatherStatus(WeatherStatus weatherStatus) {
            this.weatherStatus = weatherStatus;
            weatherStatus.getWeatherForecasts().add(this);
        }
    }

}
