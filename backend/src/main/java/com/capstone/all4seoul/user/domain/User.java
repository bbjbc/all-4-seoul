package com.capstone.all4seoul.user.domain;

import com.capstone.all4seoul.address.domain.Address;
import com.capstone.all4seoul.place.domain.Place;
import com.capstone.all4seoul.review.domain.Review;

import java.time.LocalDate;
import java.util.List;

public class User {
    private String id;
    private String password;
    private String name;
    private LocalDate birth;
    private String mbti;
    private String gender;
    private String nickName;
    private Address address;
    private Review review;
    private int credit;
    private List<Place> places;
}
