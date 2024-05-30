package com.capstone.all4seoul.seoulCityData.domain;

import com.capstone.all4seoul.common.domain.BaseTimeEntity;
import com.capstone.all4seoul.place.domain.Place;
import com.capstone.all4seoul.seoulCityData.domain.charger.ChargerStation;
import com.capstone.all4seoul.seoulCityData.domain.event.AdjacentEvent;
import com.capstone.all4seoul.seoulCityData.domain.parkingLot.ParkingLot;
import com.capstone.all4seoul.seoulCityData.domain.population.LivePopulationStatus;
import com.capstone.all4seoul.seoulCityData.domain.weather.WeatherStatus;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Getter
@Table(name = "major_places")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MajorPlace extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "major_place_id", nullable = false)
    private Long id;

    private String areaName;

    private String areaCode;

    @OneToMany(mappedBy = "majorPlace", cascade = CascadeType.ALL)
    private List<LivePopulationStatus> livePopulationStatus;

    @OneToMany(mappedBy = "majorPlace", cascade = CascadeType.ALL)
    private List<ParkingLot> parkingLot;

    @OneToMany(mappedBy = "majorPlace", cascade = CascadeType.ALL)
    private List<ChargerStation> chargerStation;

    @OneToMany(mappedBy = "majorPlace", cascade = CascadeType.ALL)
    private List<WeatherStatus> weatherStatus;

    @OneToMany(mappedBy = "majorPlace", cascade = CascadeType.ALL)
    private List<AdjacentEvent> adjacentEvent;

    @OneToOne(mappedBy = "majorPlace")
    private Place place;

    public static MajorPlace createMajorPlace(
            String areaName,
            String areaCode,
            List<LivePopulationStatus> livePopulationStatus,
            List<ParkingLot> parkingLot,
            List<ChargerStation> chargerStation,
            List<WeatherStatus> weatherStatus,
            List<AdjacentEvent> adjacentEvent
    ) {
        MajorPlace majorPlace = new MajorPlace();

        majorPlace.areaName = areaName;
        majorPlace.areaCode = areaCode;
        majorPlace.livePopulationStatus = livePopulationStatus;
        majorPlace.parkingLot = parkingLot;
        majorPlace.chargerStation = chargerStation;
        majorPlace.weatherStatus = weatherStatus;
        majorPlace.adjacentEvent = adjacentEvent;

        return majorPlace;
    }
}
