package com.capstone.all4seoul.user.domain;

import com.capstone.all4seoul.place.domain.Place;
import com.capstone.all4seoul.review.domain.Review;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private String id;

    private String login_id;
    private String login_password;
    private String name;
    private LocalDate birth;
    private String mbti;
    private String gender;
    private String nickName;
    private int credit;


    /**
     * List로 수정
     */
    @OneToMany(mappedBy = "user")
    private List<Review> reviews = new ArrayList<>();

    // place 자체는 지역정보인데, List로 만들어서 북마크 느낌
    @OneToMany(mappedBy = "user")
    private List<Place> places = new ArrayList<>();
}
