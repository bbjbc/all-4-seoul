package com.capstone.all4seoul.seoulCityData.domain.population;

import com.capstone.all4seoul.place.dto.response.externalApi.PlaceSearchResponseBySeoulDataApi;
import com.capstone.all4seoul.seoulCityData.domain.MajorPlace;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
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
@Table(name = "live_population_statuses")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LivePopulationStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "live_population_statuses_id")
    private Long id;

    private String areaCongestLevel;

    private String areaCongestMessage;

    private String minimumAreaPopulation;

    private String maximumAreaPopulation;

    private String malePopulationRate;

    private String femalePopulationRate;

    private String populationRate0;

    private String populationRate10;

    private String populationRate20;

    private String populationRate30;

    private String populationRate40;

    private String populationRate50;

    private String populationRate60;

    private String populationRate70;

    private String resentPopulationRate;

    private String nonResentPopulationRate;

    private String replaceYN;

    private String populationTime;

    private String forecastYN;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "major_place_id")
    private MajorPlace majorPlace;

    @OneToMany(mappedBy = "livePopulationStatus", cascade = CascadeType.ALL)
    private List<PopulationForecast> populationForecasts = new ArrayList<>();

    public static LivePopulationStatus createLivePopulationStatus(
            PlaceSearchResponseBySeoulDataApi.CityData.LivePopulationStatus fetchedLivePopulationStatus,
            List<PopulationForecast> populationForecasts
    ) {
        LivePopulationStatus livePopulationStatus = new LivePopulationStatus();

        livePopulationStatus.areaCongestLevel = fetchedLivePopulationStatus.getAreaCongestLevel();
        livePopulationStatus.areaCongestMessage = fetchedLivePopulationStatus.getAreaCongestMessage();
        livePopulationStatus.minimumAreaPopulation = fetchedLivePopulationStatus.getMinimumAreaPopulation();
        livePopulationStatus.maximumAreaPopulation = fetchedLivePopulationStatus.getMaximumAreaPopulation();
        livePopulationStatus.malePopulationRate = fetchedLivePopulationStatus.getMalePopulationRate();
        livePopulationStatus.femalePopulationRate = fetchedLivePopulationStatus.getFemalePopulationRate();
        livePopulationStatus.populationRate0 = fetchedLivePopulationStatus.getPopulationRate0();
        livePopulationStatus.populationRate10 = fetchedLivePopulationStatus.getPopulationRate10();
        livePopulationStatus.populationRate20 = fetchedLivePopulationStatus.getPopulationRate20();
        livePopulationStatus.populationRate30 = fetchedLivePopulationStatus.getPopulationRate30();
        livePopulationStatus.populationRate40 = fetchedLivePopulationStatus.getPopulationRate40();
        livePopulationStatus.populationRate50 = fetchedLivePopulationStatus.getPopulationRate50();
        livePopulationStatus.populationRate60 = fetchedLivePopulationStatus.getPopulationRate60();
        livePopulationStatus.populationRate70 = fetchedLivePopulationStatus.getPopulationRate70();
        livePopulationStatus.resentPopulationRate = fetchedLivePopulationStatus.getResentPopulationRate();
        livePopulationStatus.nonResentPopulationRate = fetchedLivePopulationStatus.getNonResentPopulationRate();
        livePopulationStatus.replaceYN = fetchedLivePopulationStatus.getReplaceYn();
        livePopulationStatus.populationTime = fetchedLivePopulationStatus.getPopulationTime();
        livePopulationStatus.forecastYN = fetchedLivePopulationStatus.getForecastYn();
        livePopulationStatus.populationForecasts = populationForecasts;

        return livePopulationStatus;
    }

    @Entity
    @Getter
    @Table(name = "population_forecasts")
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class PopulationForecast {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "population_forecast_id")
        private Long id;

        private String time;

        private String congestLevel;

        private String minimumForecastPopulation;

        private String maximumForecastPopulation;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "live_population_status_id")
        private LivePopulationStatus livePopulationStatus;

        public static PopulationForecast createPopulationForecast(
                PlaceSearchResponseBySeoulDataApi.CityData.LivePopulationStatus.ForecastPopulation fetchedForecastPopulation
        ) {
            PopulationForecast populationForecast = new PopulationForecast();

            populationForecast.time = fetchedForecastPopulation.getTime();
            populationForecast.congestLevel = fetchedForecastPopulation.getCongestLevel();
            populationForecast.minimumForecastPopulation = fetchedForecastPopulation.getMinimumForecastPopulation();
            populationForecast.maximumForecastPopulation = fetchedForecastPopulation.getMaximumForecastPopulation();

            return populationForecast;
        }
    }
}


