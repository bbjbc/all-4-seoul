package com.capstone.all4seoul.seoulCityData.parkingLot.domain;

import com.capstone.all4seoul.common.domain.BaseTimeEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Table(name = "parking_lots")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ParkingLot extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "parking_lot_id")
    private Long id;

    private String name;

    private String code;

    private String capacity;

    private String currentParkingCount;

    private String currentParkingTime;

    private String currentParkingYn;

    private String payYn;

    private String rates;

    private String timeRates;

    private String addRates;

    private String addTimeRates;

    private String address;

    private String roadAddr;

    private String longitude;

    private String latitude;

    public static ParkingLot createParkingLot(
            String name,
            String code,
            String capacity,
            String currentParkingCount,
            String currentParkingTime,
            String currentParkingYn,
            String payYn,
            String rates,
            String timeRates,
            String addRates,
            String addTimeRates,
            String address,
            String roadAddr,
            String longitude,
            String latitude
    ) {
        ParkingLot parkingLot = new ParkingLot();

        parkingLot.name = name;
        parkingLot.code = code;
        parkingLot.capacity = capacity;
        parkingLot.currentParkingCount = currentParkingCount;
        parkingLot.currentParkingTime = currentParkingTime;
        parkingLot.currentParkingYn = currentParkingYn;
        parkingLot.payYn = payYn;
        parkingLot.rates = rates;
        parkingLot.timeRates = timeRates;
        parkingLot.addRates = addRates;
        parkingLot.addTimeRates = addTimeRates;
        parkingLot.address = address;
        parkingLot.roadAddr = roadAddr;
        parkingLot.longitude = longitude;
        parkingLot.latitude = latitude;

        return parkingLot;
    }
}
