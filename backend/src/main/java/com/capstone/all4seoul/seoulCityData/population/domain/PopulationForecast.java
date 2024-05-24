package com.capstone.all4seoul.seoulCityData.population.domain;

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
@Table(name = "population_forecasts")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PopulationForecast extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "population_forecast_id")
    private Long id;

    private String time;

    private String congestLevel;

    private String minimumForecastPopulation;

    private String maximumForecastPopulation;

    @ManyToOne
    @JoinColumn(name = "live_population_status_id", nullable = false, updatable = false)
    private LivePopulationStatus livePopulationStatus;

    public static PopulationForecast createPopulationForecast(
            String forecastTime,
            String forecastCongestLevel,
            String minimumForecastPopulation,
            String maximumForecastPopulation,
            LivePopulationStatus livePopulationStatus
    ) {
        PopulationForecast populationForecast = new PopulationForecast();

        populationForecast.time = forecastTime;
        populationForecast.congestLevel = forecastCongestLevel;
        populationForecast.minimumForecastPopulation = minimumForecastPopulation;
        populationForecast.maximumForecastPopulation = maximumForecastPopulation;
        populationForecast.setLivePopulationStatus(livePopulationStatus);

        return populationForecast;
    }

    /**
     * 연관관계 편의 메소드
     */
    public void setLivePopulationStatus(LivePopulationStatus livePopulationStatus) {
        this.livePopulationStatus = livePopulationStatus;
        livePopulationStatus.getPopulationForecasts().add(this);
    }
}
