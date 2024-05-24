package com.capstone.all4seoul.seoulCityData.charger.repository;

import com.capstone.all4seoul.seoulCityData.charger.domain.ChargerDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ChargerDetailRepository extends JpaRepository<ChargerDetail, Long> {
    @Transactional
    @Modifying
    @Query("update ChargerDetail c set c.latest = false where c.latest = true")
    void updateLatestByLatestTrue();
}
