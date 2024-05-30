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

    private List<LivePopulationStatus> livePopulationStatus;

    private List<ParkingLot> parkingLot;

    private List<ChargerStation> chargerStation;

    private List<WeatherStatus> weatherStatus;

    private List<AdjacentEvent> adjacentEvent;


    public static MajorPlaceResponse of(MajorPlace majorPlace) {
        MajorPlaceResponse majorPlaceResponse = new MajorPlaceResponse();

        majorPlaceResponse.areaName = majorPlace.getAreaName();
        majorPlaceResponse.areaCode = majorPlace.getAreaCode();
        majorPlaceResponse.livePopulationStatus = majorPlace.getLivePopulationStatus();
        majorPlaceResponse.parkingLot = majorPlace.getParkingLot();
        majorPlaceResponse.chargerStation = majorPlace.getChargerStation();
        majorPlaceResponse.weatherStatus = majorPlace.getWeatherStatus();
        majorPlaceResponse.adjacentEvent = majorPlace.getAdjacentEvent();

        return majorPlaceResponse;
    }
}
