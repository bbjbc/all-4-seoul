package com.capstone.all4seoul.seoulCityData.domain.event;

import com.capstone.all4seoul.place.dto.response.externalApi.PlaceSearchResponseBySeoulDataApi;
import com.capstone.all4seoul.seoulCityData.domain.MajorPlace;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Table(name = "adjacent_events")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AdjacentEvent {
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "major_place_id")
    private MajorPlace majorPlace;

    public static AdjacentEvent createAdjacentEvent(
            PlaceSearchResponseBySeoulDataApi.CityData.AdjacentEvent fetchedAdjacentEvent
    ) {
        AdjacentEvent adjacentEvent = new AdjacentEvent();

        adjacentEvent.name = fetchedAdjacentEvent.getName();
        adjacentEvent.period = fetchedAdjacentEvent.getPeriod();
        adjacentEvent.place = fetchedAdjacentEvent.getPlace();
        adjacentEvent.longitude = fetchedAdjacentEvent.getLongitude();
        adjacentEvent.latitude = fetchedAdjacentEvent.getLatitude();
        adjacentEvent.payYn = fetchedAdjacentEvent.getPayYn();
        adjacentEvent.thumbnail = fetchedAdjacentEvent.getThumbnail();
        adjacentEvent.url = fetchedAdjacentEvent.getUrl();
        adjacentEvent.etcDetail = fetchedAdjacentEvent.getEtcDetail();

        return adjacentEvent;
    }

    public void setMajorPlace(MajorPlace majorPlace) {
        this.majorPlace = majorPlace;
        majorPlace.getAdjacentEvents().add(this);
    }
}
