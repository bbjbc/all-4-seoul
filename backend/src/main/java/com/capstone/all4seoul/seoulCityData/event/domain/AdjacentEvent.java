package com.capstone.all4seoul.seoulCityData.event.domain;

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
@Table(name = "adjacent_events")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AdjacentEvent extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "adjacent_event_id")
    private Long id;

    private String name;

    private String period;

    private String place;

    private String longitude;

    private String latitude;

    private String payYn;

    private String thumbnail;

    private String url;

    private String etcDetail;

    public static AdjacentEvent createAdjacentEvent(
            String name,
            String period,
            String place,
            String longitude,
            String latitude,
            String payYn,
            String thumbnail,
            String url,
            String etcDetail
    ) {
        AdjacentEvent adjacentEvent = new AdjacentEvent();

        adjacentEvent.name = name;
        adjacentEvent.period = period;
        adjacentEvent.place = place;
        adjacentEvent.longitude = longitude;
        adjacentEvent.latitude = latitude;
        adjacentEvent.payYn = payYn;
        adjacentEvent.thumbnail = thumbnail;
        adjacentEvent.url = url;
        adjacentEvent.etcDetail = etcDetail;

        return adjacentEvent;
    }
}
