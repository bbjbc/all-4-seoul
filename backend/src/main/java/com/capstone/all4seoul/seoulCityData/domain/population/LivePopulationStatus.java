package com.capstone.all4seoul.seoulCityData.domain.population;

import com.capstone.all4seoul.place.dto.response.externalApi.PlaceSearchResponseBySeoulDataApi;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LivePopulationStatus {
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

    private List<PopulationForecast> populationForecasts = new ArrayList<>();

    public static LivePopulationStatus createLivePopulationStatus(
            PlaceSearchResponseBySeoulDataApi.CityData.LivePopulationStatus fetchedLivePopulationStatus
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
        livePopulationStatus.populationForecasts = null;

        return livePopulationStatus;
    }
}


