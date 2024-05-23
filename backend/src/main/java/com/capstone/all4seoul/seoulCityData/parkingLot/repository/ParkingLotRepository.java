package com.capstone.all4seoul.seoulCityData.parkingLot.repository;

import com.capstone.all4seoul.seoulCityData.parkingLot.domain.ParkingLot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ParkingLotRepository extends JpaRepository<ParkingLot, Long> {
    @Transactional
    @Modifying
    @Query("update ParkingLot p set p.latest = false where p.latest = true")
    void updateLatestByLatestTrue();
}