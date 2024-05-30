package com.capstone.all4seoul.place.dto.response;

import com.capstone.all4seoul.seoulCityData.domain.MajorPlace;
import com.capstone.all4seoul.seoulCityData.domain.charger.ChargerStation;
import com.capstone.all4seoul.seoulCityData.domain.event.AdjacentEvent;
import com.capstone.all4seoul.seoulCityData.domain.parkingLot.ParkingLot;
import com.capstone.all4seoul.seoulCityData.domain.population.LivePopulationStatus;
import com.capstone.all4seoul.seoulCityData.domain.weather.WeatherStatus;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MajorPlaceResponse {
    private String areaName;

    private String areaCode;

    private List<LivePopulationStatus> livePopulationStatuses; // DTO 만들어야댐

    private List<ParkingLot> parkingLots;

    private List<ChargerStation> chargerStations;

    private List<WeatherStatus> weatherStatuses;

    private List<AdjacentEvent> adjacentEvents;


    public static MajorPlaceResponse of(MajorPlace majorPlace) {
        MajorPlaceResponse majorPlaceResponse = new MajorPlaceResponse();

        majorPlaceResponse.areaName = majorPlace.getAreaName();
        majorPlaceResponse.areaCode = majorPlace.getAreaCode();
        majorPlaceResponse.livePopulationStatuses = majorPlace.getLivePopulationStatuses();
        majorPlaceResponse.parkingLots = majorPlace.getParkingLots();
        majorPlaceResponse.chargerStations = majorPlace.getChargerStations();
        majorPlaceResponse.weatherStatuses = majorPlace.getWeatherStatuses();
        majorPlaceResponse.adjacentEvents = majorPlace.getAdjacentEvents();

        return majorPlaceResponse;
    }
}
