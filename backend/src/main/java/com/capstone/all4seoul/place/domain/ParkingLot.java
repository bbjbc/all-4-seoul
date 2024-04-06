package com.capstone.all4seoul.place.domain;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("parking_lot")
public class ParkingLot extends Place {

    @Column(name = "capacity")
    private String capacity;

    @Column(name = "price")
    private String price;

    @Column(name = "time_rates")
    private String timeRates;

    @Column(name = "add_rates")
    private String addRates;

    @Column(name = "etc")
    private String etc;
}
