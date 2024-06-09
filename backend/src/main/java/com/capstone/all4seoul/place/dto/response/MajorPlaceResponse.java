package com.capstone.all4seoul.place.dto.response;

import com.capstone.all4seoul.seoulCityData.domain.MajorPlace;
import com.capstone.all4seoul.seoulCityData.dto.response.AdjacentEventResponse;
import com.capstone.all4seoul.seoulCityData.dto.response.ChargerStationResponse;
import com.capstone.all4seoul.seoulCityData.dto.response.LivePopulationStatusResponse;
import com.capstone.all4seoul.seoulCityData.dto.response.ParkingLotResponse;
import com.capstone.all4seoul.seoulCityData.dto.response.WeatherStatusResponse;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MajorPlaceResponse {
    private String areaName;

    private String areaCode;

    private List<LivePopulationStatusResponse> livePopulationStatuses;

    private List<ParkingLotResponse> parkingLots;

    private List<ChargerStationResponse> chargerStations;

    private List<WeatherStatusResponse> weatherStatuses;

    private List<AdjacentEventResponse> adjacentEvents;

    public static MajorPlaceResponse of(MajorPlace majorPlace) {
        MajorPlaceResponse majorPlaceResponse = new MajorPlaceResponse();

        majorPlaceResponse.areaName = majorPlace.getAreaName();
        majorPlaceResponse.areaCode = majorPlace.getAreaCode();
        majorPlaceResponse.livePopulationStatuses = majorPlace.getLivePopulationStatuses()
                .stream()
                .map(LivePopulationStatusResponse::of)
                .toList();
        majorPlaceResponse.parkingLots = majorPlace.getParkingLots()
                .stream()
                .map(ParkingLotResponse::of)
                .toList();
        majorPlaceResponse.chargerStations = majorPlace.getChargerStations()
                .stream()
                .map(ChargerStationResponse::of)
                .toList();
        majorPlaceResponse.weatherStatuses = majorPlace.getWeatherStatuses()
                .stream()
                .map(WeatherStatusResponse::of)
                .toList();
        majorPlaceResponse.adjacentEvents = majorPlace.getAdjacentEvents()
                .stream()
                .map(AdjacentEventResponse::of)
                .toList();

        return majorPlaceResponse;
    }
}
