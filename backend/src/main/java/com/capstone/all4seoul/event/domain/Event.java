package com.capstone.all4seoul.event.domain;

import com.capstone.all4seoul.place.domain.Place;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id", nullable = false)
    private Long id;

    private String name;
    private String duration;
    private String price;

    @OneToOne
    @JoinColumn(name = "place_id")
    private Place location;

    private String x;
    private String y;
}
