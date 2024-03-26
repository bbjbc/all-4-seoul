package com.capstone.all4seoul.place.domain;

import com.capstone.all4seoul.address.domain.Address;
import com.capstone.all4seoul.review.domain.Review;

import java.util.List;

public class Place {
    private String name;
    private Address address;
    private List<Review> reviews;
    private String phoneNumber;
    private String x;
    private String y;
}
