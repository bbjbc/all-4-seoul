package com.capstone.all4seoul.seoulCityData.domain.charger;

import com.capstone.all4seoul.place.dto.response.externalApi.PlaceSearchResponseBySeoulDataApi;
import com.capstone.all4seoul.seoulCityData.domain.MajorPlace;
import com.capstone.all4seoul.seoulCityData.domain.population.LivePopulationStatus;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class ChargerStation {
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "major_place_id")
    private MajorPlace majorPlace;

    @OneToMany(mappedBy = "chargerStation", cascade = CascadeType.ALL)
    private List<ChargerDetail> chargerDetails = new ArrayList<>();

    public ChargerStation(
            PlaceSearchResponseBySeoulDataApi.CityData.ChargerStation fetchedChargerStation,
            List<ChargerDetail> chargerDetails
    ) {
        this.name = fetchedChargerStation.getName();
        this.stationId = fetchedChargerStation.getStationId();
        this.address = fetchedChargerStation.getAddress();
        this.longitude = fetchedChargerStation.getLongitude();
        this.latitude = fetchedChargerStation.getLatitude();
        this.useTime = fetchedChargerStation.getUseTime();
        this.parkPay = fetchedChargerStation.getParkPay();
        this.limitYn = fetchedChargerStation.getLimitYn();
        this.limitDetail = fetchedChargerStation.getLimitDetail();
        this.kindDetail = fetchedChargerStation.getKindDetail();
        setChargerDetails(chargerDetails);
    }

    public void setMajorPlace(MajorPlace majorPlace) {
        this.majorPlace = majorPlace;
        majorPlace.getChargerStations().add(this);
    }

    private void setChargerDetails(List<ChargerDetail> chargerDetails) {
        chargerDetails.stream()
                .forEach(chargerDetail -> chargerDetail.setChargerStation(this));
    }

    @Entity
    @Getter
    @Table(name = "charger_details")
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class ChargerDetail {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "charger_detail_id")
        private Long id;

        private String chargerId;

        private String type;

        private String status;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "charger_station_id")
        private ChargerStation chargerStation;

        public static ChargerDetail createChargerDetail(
                PlaceSearchResponseBySeoulDataApi.CityData.ChargerStation.ChargerDetail fetchedChargerDetail
        ) {
            ChargerDetail chargerDetail = new ChargerDetail();

            chargerDetail.chargerId = fetchedChargerDetail.getChargerId();
            chargerDetail.type = fetchedChargerDetail.getType();
            chargerDetail.status = fetchedChargerDetail.getStatus();

            return chargerDetail;
        }

        private void setChargerStation(ChargerStation chargerStation) {
            this.chargerStation = chargerStation;
            chargerStation.getChargerDetails().add(this);
        }
    }
}
