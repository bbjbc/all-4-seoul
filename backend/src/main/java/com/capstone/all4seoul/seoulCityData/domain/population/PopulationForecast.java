package com.capstone.all4seoul.seoulCityData.domain.population;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PopulationForecast {
    private String time;

    private String congestLevel;

    private String minimumForecastPopulation;

    private String maximumForecastPopulation;

    public static PopulationForecast createPopulationForecast(
            String forecastTime,
            String forecastCongestLevel,
            String minimumForecastPopulation,
            String maximumForecastPopulation
    ) {
        PopulationForecast populationForecast = new PopulationForecast();

        populationForecast.time = forecastTime;
        populationForecast.congestLevel = forecastCongestLevel;
        populationForecast.minimumForecastPopulation = minimumForecastPopulation;
        populationForecast.maximumForecastPopulation = maximumForecastPopulation;

        return populationForecast;
    }
}
