package com.capstone.all4seoul.seoulCityData;

import com.capstone.all4seoul.place.domain.Place;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Table(name = "major_places")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MajorPlace {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "major_place_id", nullable = false)
    private Long id;

    private String category;

    private String areaCode;

    private String areaName;

    private String areaEnglishName;

    @OneToOne(mappedBy = "majorPlace")
    private Place place;

    public static MajorPlace createMajorPlace(
            String category,
            String areaCode,
            String areaName,
            String areaEnglishName
    ) {
        MajorPlace majorPlace = new MajorPlace();

        majorPlace.category = category;
        majorPlace.areaCode = areaCode;
        majorPlace.areaName = areaName;
        majorPlace.areaEnglishName = areaEnglishName;

        return majorPlace;
    }
}
