package com.capstone.all4seoul.seoulCityData.population.domain;

import com.capstone.all4seoul.common.domain.BaseTimeEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class LivePopulationStatus extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "live_population_status_id")
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

    private String residentPopulationRate;

    private String nonResidentPopulationRate;

    private String replaceYN;

    private String populationTime;

    private String forecastYN;

    @OneToMany(mappedBy = "livePopulationStatus", cascade = CascadeType.ALL)
    private List<PopulationForecast> populationForecasts = new ArrayList<>();

    public static LivePopulationStatus createLivePopulationStatus(
            String areaCongestLevel,
            String areaCongestMessage,
            String minimumAreaPopulation,
            String maximumAreaPopulation,
            String malePopulationRate,
            String femalePopulationRate,
            String populationRate0,
            String populationRate10,
            String populationRate20,
            String populationRate30,
            String populationRate40,
            String populationRate50,
            String populationRate60,
            String populationRate70,
            String residentPopulationRate,
            String nonResidentPopulationRate,
            String replaceYN,
            String populationTime,
            String forecastYN
    ) {
        LivePopulationStatus livePopulationStatus = new LivePopulationStatus();

        livePopulationStatus.areaCongestLevel = areaCongestLevel;
        livePopulationStatus.areaCongestMessage = areaCongestMessage;
        livePopulationStatus.minimumAreaPopulation = minimumAreaPopulation;
        livePopulationStatus.maximumAreaPopulation = maximumAreaPopulation;
        livePopulationStatus.malePopulationRate = malePopulationRate;
        livePopulationStatus.femalePopulationRate = femalePopulationRate;
        livePopulationStatus.populationRate0 = populationRate0;
        livePopulationStatus.populationRate10 = populationRate10;
        livePopulationStatus.populationRate20 = populationRate20;
        livePopulationStatus.populationRate30 = populationRate30;
        livePopulationStatus.populationRate40 = populationRate40;
        livePopulationStatus.populationRate50 = populationRate50;
        livePopulationStatus.populationRate60 = populationRate60;
        livePopulationStatus.populationRate70 = populationRate70;
        livePopulationStatus.residentPopulationRate = residentPopulationRate;
        livePopulationStatus.nonResidentPopulationRate = nonResidentPopulationRate;
        livePopulationStatus.replaceYN = replaceYN;
        livePopulationStatus.populationTime = populationTime;
        livePopulationStatus.forecastYN = forecastYN;

        return livePopulationStatus;
    }
}


