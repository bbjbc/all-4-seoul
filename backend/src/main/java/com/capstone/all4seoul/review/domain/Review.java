package com.capstone.all4seoul.review.domain;

import com.capstone.all4seoul.place.domain.Place;
import com.capstone.all4seoul.user.domain.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, updatable = false)
    private User user;

    @Column(name = "starRating", nullable = false, updatable = false)
    private Double starRating;

    @Column(name = "content", nullable = false, updatable = false)
    private String content;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "place_id", nullable = false, updatable = false)
    private Place place;

    public static Review create(User user, String content, Double starRating) {
        Review review = new Review();
        review.setUser(user);
        review.setContent(content);
        review.setStarRating(starRating);
        review.setPlace(null);
        return review;
    }

    /**
     * 연관관계 메서드
     */
    public void setUser(User user) {
        this.user = user;
        user.getReviews().add(this);
    }

    public void setPlace(Place place) {
        this.place = place;
        place.getReviews().add(this);
    }
}