package com.capstone.all4seoul.seoulCityData.domain.charger;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ChargerDetail {
    private String chargerId;

    private String type;

    private String status;

    public static ChargerDetail createChargerDetail(
            String chargerId,
            String type,
            String status
    ) {
        ChargerDetail chargerDetail = new ChargerDetail();

        chargerDetail.chargerId = chargerId;
        chargerDetail.type = type;
        chargerDetail.status = status;

        return chargerDetail;
    }
}
