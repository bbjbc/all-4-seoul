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
    private Long id;

    @Column(name = "login_id", nullable = false, unique = true, updatable = false, length = 30)
    private String loginId;

    @Column(name = "login_password", nullable = false, length = 100)
    private String loginPassword;

    @Column(name = "name", nullable = false, length = 30)
    private String name;

    @Column(name = "birth", nullable = false)
    private LocalDate birth;

    @Column(name = "mbti", nullable = false)
    private String mbti;

    @Enumerated
    @Column(name = "gender", nullable = false)
    private String gender;

    @Column(name = "nickname", nullable = false, unique = true, length = 30)
    private String nickName;

    @Column(name = "credit", nullable = false)
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
