package com.capstone.all4seoul.seoulCityData.charger.domain;

import com.capstone.all4seoul.common.domain.BaseTimeEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "charger_details")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChargerDetail extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "charger_detail_id")
    private Long id;

    private String chargerId;

    private String type;

    private String status;

    @ManyToOne
    @JoinColumn(name = "charger_station_id", nullable = false, updatable = false)
    private ChargerStation chargerStation;

    public static ChargerDetail createChargerDetail(
            String chargerId,
            String type,
            String status,
            ChargerStation chargerStation
    ) {
        ChargerDetail chargerDetail = new ChargerDetail();

        chargerDetail.chargerId = chargerId;
        chargerDetail.type = type;
        chargerDetail.status = status;
        chargerDetail.setChargerStation(chargerStation);

        return chargerDetail;
    }

    /**
     * 연관관계 편의 메소드
     */
    public void setChargerStation(ChargerStation chargerStation) {
        this.chargerStation = chargerStation;
        chargerStation.getChargerDetails().add(this);
    }
}
