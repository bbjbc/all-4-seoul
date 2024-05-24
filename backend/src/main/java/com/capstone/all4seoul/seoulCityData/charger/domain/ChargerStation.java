package com.capstone.all4seoul.seoulCityData.charger.domain;

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
@Table(name = "charger_stations")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChargerStation extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "charger_station_id")
    private Long id;

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

    @OneToMany(mappedBy = "chargerStation", cascade = CascadeType.ALL)
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
            String kindDetail
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

        return chargerStation;
    }
}
