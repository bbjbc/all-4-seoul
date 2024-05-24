package com.capstone.all4seoul.seoulCityData.event.repository;

import com.capstone.all4seoul.seoulCityData.event.domain.AdjacentEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface AdjacentEventRepository extends JpaRepository<AdjacentEvent, Long> {
    @Transactional
    @Modifying
    @Query("update AdjacentEvent a set a.latest = false where a.latest = true")
    void updateLatestByLatestTrue();

}