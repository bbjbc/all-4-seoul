package com.capstone.all4seoul.review.domain;

import com.capstone.all4seoul.place.domain.Place;
import com.capstone.all4seoul.user.domain.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private Double starRating;
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id")
    private Place place;

    /**
     * 연관관계 메서드
     */
    public void setUser(User user) {
        this.user = user;
        user.getReviews().add(this);
    }


}
