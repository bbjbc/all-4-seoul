package com.capstone.all4seoul.seoulCityData.domain.charger;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChargerStation {
    private String name;

    private String stationId;

    private String address;

    private String longitude;

    private String latitude;

    private String useTime;

    private String parkPay;

    private String limitYn;

    private String limitDetail;

    private String kindDetail; // 충전소 장소 유형 (ex. 사업장, 공영주차장)

    private List<ChargerDetail> chargerDetails = new ArrayList<>();

    public static ChargerStation createChargerStation(
            String name,
            String stationId,
            String address,
            String longitude,
            String latitude,
            String useTime,
            String parkPay,
            String limitYn,
            String limitDetail,
            String kindDetail,
            List<ChargerDetail> chargerDetails
    ) {
        ChargerStation chargerStation = new ChargerStation();

        chargerStation.name = name;
        chargerStation.stationId = stationId;
        chargerStation.address = address;
        chargerStation.longitude = longitude;
        chargerStation.latitude = latitude;
        chargerStation.useTime = useTime;
        chargerStation.parkPay = parkPay;
        chargerStation.limitYn = limitYn;
        chargerStation.limitDetail = limitDetail;
        chargerStation.kindDetail = kindDetail;
        chargerStation.chargerDetails = chargerDetails;

        return chargerStation;
    }
}
