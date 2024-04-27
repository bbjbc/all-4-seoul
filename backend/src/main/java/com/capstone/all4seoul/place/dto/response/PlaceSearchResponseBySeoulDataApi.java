package com.capstone.all4seoul.place.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PlaceSearchResponseBySeoulDataApi {
    @JsonProperty("list_total_count")
    private Long listTotalCount;
    @JsonProperty("RESULT")
    private Result result;
    @JsonProperty("CITYDATA")
    private CityData cityData;

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    static class Result {
        @JsonProperty("RESULT.CODE")
        private String resultCode;
        @JsonProperty("RESULT.MESSAGE")
        private String resultMessage;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    static class CityData {
        @JsonProperty("AREA_NM")
        private String areaName;
        @JsonProperty("AREA_CD")
        private String areaCode;
        @JsonProperty("LIVE_PPLTN_STTS")
        private List<LivePopulationStatus> livePopulation;
        @JsonProperty("ROAD_TRAFFIC_STTS")
        private RoadTrafficStatus roadTrafficStatus;
        @JsonProperty("PRK_STTS")
        private List<ParkingStatus> parkingLotStatus;
        @JsonProperty("SUB_STTS")
        private List<Sub> SUB_STTS;
        @JsonProperty("BUS_STN_STTS")
        private List<Bus> BUS_STN_STTS;
        @JsonProperty("ACDNT_CNTRL_STTS")
        private List<Object> ACDNT_CNTRL_STTS;
        @JsonProperty("SBIKE_STTS")
        private List<Object> SBIKE_STTS;
        @JsonProperty("WEATHER_STTS")
        private List<WeatherStatus> weatherStatus;
        @JsonProperty("CHARGER_STTS")
        private List<ChargerStatus> chargerStatus;
        @JsonProperty("EVENT_STTS")
        private List<EventStatus> eventStatus;
        @JsonProperty("COVID_19_STTS")
        private String COVID_19_STTS;

        @Getter
        @NoArgsConstructor
        @AllArgsConstructor
        static class LivePopulationStatus {
            @JsonProperty("AREA_CONGEST_LVL")
            private String areaCongestLevel;
            @JsonProperty("AREA_CONGEST_MSG")
            private String areaCongestMessage;
            @JsonProperty("AREA_PPLTN_MIN")
            private String minimumAreaPopulation;
            @JsonProperty("AREA_PPLTN_MAX")
            private String maximumAreaPopulation;
            @JsonProperty("MALE_PPLTN_RATE")
            private String malePopulationRate;
            @JsonProperty("FEMALE_PPLTN_RATE")
            private String femalePopulationRate;
            @JsonProperty("PPLTN_RATE_0")
            private String populationRate0;
            @JsonProperty("PPLTN_RATE_10")
            private String populationRate10;
            @JsonProperty("PPLTN_RATE_20")
            private String populationRate20;
            @JsonProperty("PPLTN_RATE_30")
            private String populationRate30;
            @JsonProperty("PPLTN_RATE_40")
            private String populationRate40;
            @JsonProperty("PPLTN_RATE_50")
            private String populationRate50;
            @JsonProperty("PPLTN_RATE_60")
            private String populationRate60;
            @JsonProperty("PPLTN_RATE_70")
            private String populationRate70;
            @JsonProperty("RESNT_PPLTN_RATE")
            private String resentPopulationRate;
            @JsonProperty("NON_RESNT_PPLTN_RATE")
            private String nonResentPopulationRate;
            @JsonProperty("REPLACE_YN")
            private String replaceYn;
            @JsonProperty("PPLTN_TIME")
            private String populationTime;
            @JsonProperty("FCST_YN")
            private String forecastYn;
            @JsonProperty("FCST_PPLTN")
            private List<ForecastPopulation> forecastPopulation;

            @Getter
            @NoArgsConstructor
            @AllArgsConstructor
            static class ForecastPopulation {
                @JsonProperty("FCST_TIME")
                private String forecastTime;
                @JsonProperty("FCST_CONGEST_LVL")
                private String forecastCongestLevel;
                @JsonProperty("FCST_PPLTN_MIN")
                private String minimumForecastPopulation;
                @JsonProperty("FCST_PPLTN_MAX")
                private String maximumForecastPopulation;
            }
        }

        @Getter
        @NoArgsConstructor
        @AllArgsConstructor
        static class RoadTrafficStatus {
            @JsonProperty("AVG_ROAD_DATA")
            private AvgRoadData averageRoadData;
            @JsonProperty("ROAD_TRAFFIC_STTS")
            private List<RoadTrafficStatus2> roadTrafficStatus;

            @Getter
            @NoArgsConstructor
            @AllArgsConstructor
            static class AvgRoadData {
                @JsonProperty("ROAD_MSG")
                private String roadMessage;
                @JsonProperty("ROAD_TRAFFIC_IDX")
                private String roadTrafficIndex;
                @JsonProperty("ROAD_TRFFIC_TIME")
                private String roadTrafficTime;
                @JsonProperty("ROAD_TRAFFIC_SPD")
                private Long roadTrafficSpeed;
            }

            @Getter
            @NoArgsConstructor
            @AllArgsConstructor
            static class RoadTrafficStatus2 {
                @JsonProperty("LINK_ID")
                private String LINK_ID;
                @JsonProperty("ROAD_NM")
                private String ROAD_NM;
                @JsonProperty("START_ND_CD")
                private String START_ND_CD;
                @JsonProperty("START_ND_NM")
                private String START_ND_NM;
                @JsonProperty("START_ND_XY")
                private String START_ND_XY;
                @JsonProperty("END_ND_CD")
                private String END_ND_CD;
                @JsonProperty("END_ND_NM")
                private String END_ND_NM;
                @JsonProperty("END_ND_XY")
                private String END_ND_XY;
                @JsonProperty("DIST")
                private String DIST;
                @JsonProperty("SPD")
                private String SPD;
                @JsonProperty("IDX")
                private String IDX;
                @JsonProperty("XYLIST")
                private String XYLIST;
            }
        }

        @Getter
        @NoArgsConstructor
        @AllArgsConstructor
        static class ParkingStatus {
            @JsonProperty("PRK_NM")
            private String parkingName;
            @JsonProperty("PRK_CD")
            private String parkingCode;
            @JsonProperty("CPCITY")
            private String capacity;
            @JsonProperty("CUR_PRK_CNT")
            private String currentParkingCount;
            @JsonProperty("CUR_PRK_TIME")
            private String currentParkingTime;
            @JsonProperty("CUR_PRK_YN")
            private String currentParkingYn;
            @JsonProperty("PAY_YN")
            private String payYn;
            @JsonProperty("RATES")
            private String rates;
            @JsonProperty("TIME_RATES")
            private String timeRates;
            @JsonProperty("ADD_RATES")
            private String addRates;
            @JsonProperty("ADD_TIME_RATES")
            private String addTimeRates;
            @JsonProperty("ADDRESS")
            private String address;
            @JsonProperty("ROAD_ADDR")
            private String roadAddr;
            @JsonProperty("LNG")
            private String longitude;
            @JsonProperty("LAT")
            private String latitude;
        }

        @Getter
        @NoArgsConstructor
        @AllArgsConstructor
        static class Sub {
            @JsonProperty("SUB_STN_NM")
            private String substationName;
            @JsonProperty("SUB_STN_LINE")
            private String substationLine;
            @JsonProperty("SUB_STN_RADDR")
            private String SUB_STN_RADDR;
            @JsonProperty("SUB_STN_JIBUN")
            private String SUB_STN_JIBUN;
            @JsonProperty("SUB_STN_X")
            private String SUB_STN_X;
            @JsonProperty("SUB_STN_Y")
            private String SUB_STN_Y;
            @JsonProperty("SUB_DETAIL")
            private List<SubDetail> SUB_DETAIL;

            @Getter
            @NoArgsConstructor
            @AllArgsConstructor
            static class SubDetail {
                @JsonProperty("SUB_NT_STN")
                private String SUB_NT_STN;
                @JsonProperty("SUB_BF_STN")
                private String SUB_BF_STN;
                @JsonProperty("SUB_ROUTE_NM")
                private String SUB_ROUTE_NM;
                @JsonProperty("SUB_LINE")
                private String SUB_LINE;
                @JsonProperty("SUB_ORD")
                private String SUB_ORD;
                @JsonProperty("SUB_DIR")
                private String SUB_DIR;
                @JsonProperty("SUB_TERMINAL")
                private String SUB_TERMINAL;
                @JsonProperty("SUB_ARVTIME")
                private String SUB_ARVTIME;
                @JsonProperty("SUB_ARMG1")
                private String SUB_ARMG1;
                @JsonProperty("SUB_ARMG2")
                private String SUB_ARMG2;
                @JsonProperty("SUB_ARVINFO")
                private String SUB_ARVINFO;
            }
        }

        @Getter
        @NoArgsConstructor
        @AllArgsConstructor
        static class Bus {
            @JsonProperty("BUS_RESULT_MSG")
            private String BUS_RESULT_MSG;
            @JsonProperty("BUS_STN_ID")
            private String BUS_STN_ID;
            @JsonProperty("BUS_ARS_ID")
            private String BUS_ARS_ID;
            @JsonProperty("BUS_STN_NM")
            private String BUS_STN_NM;
            @JsonProperty("BUS_STN_X")
            private String BUS_STN_X;
            @JsonProperty("BUS_STN_Y")
            private String BUS_STN_Y;
            @JsonProperty("BUS_DETAIL")
            private List<BusDetail> BUS_DETAIL;

            @Getter
            @NoArgsConstructor
            @AllArgsConstructor
            static class BusDetail {
                @JsonProperty("RTE_STN_NM")
                private String RTE_STN_NM;
                @JsonProperty("RTE_NM")
                private String RTE_NM;
                @JsonProperty("RTE_ID")
                private String RTE_ID;
                @JsonProperty("RTE_SECT")
                private String RTE_SECT;
                @JsonProperty("RTE_CONGEST_1")
                private String RTE_CONGEST_1;
                @JsonProperty("RTE_ARRV_TM_1")
                private String RTE_ARRV_TM_1;
                @JsonProperty("RTE_ARRV_STN_1")
                private String RTE_ARRV_STN_1;
                @JsonProperty("RTE_CONGEST_2")
                private String RTE_CONGEST_2;
                @JsonProperty("RTE_ARRV_TM_2")
                private String RTE_ARRV_TM_2;
                @JsonProperty("RTE_ARRV_STN_2")
                private String RTE_ARRV_STN_2;
            }
        }

        @Getter
        @NoArgsConstructor
        @AllArgsConstructor
        static class WeatherStatus {
            @JsonProperty("WEATHER_TIME")
            private String weatherTime;
            @JsonProperty("TEMP")
            private String temperature;
            @JsonProperty("SENSIBLE_TEMP")
            private String sensibleTemperature;
            @JsonProperty("MAX_TEMP")
            private String maximumTemperature;
            @JsonProperty("MIN_TEMP")
            private String minimumTemperature;
            @JsonProperty("HUMIDITY")
            private String humidity;
            @JsonProperty("PRECIPITATION")
            private String precipitation;
            @JsonProperty("PRECPT_TYPE")
            private String precipitationType;
            @JsonProperty("PCP_MSG")
            private String precipitationMessage;
            @JsonProperty("SUNRISE")
            private String SUNRISE;
            @JsonProperty("SUNSET")
            private String SUNSET;
            @JsonProperty("UV_INDEX_LVL")
            private String uvIndexLevel;
            @JsonProperty("UV_INDEX")
            private String uvIndex;
            @JsonProperty("UV_MSG")
            private String uvMessage;
            @JsonProperty("PM25_INDEX")
            private String particulateMatter25Index;
            @JsonProperty("PM25")
            private String particulateMatter25;
            @JsonProperty("PM10_INDEX")
            private String particulateMatter10Index;
            @JsonProperty("PM10")
            private String particulateMatter10;
            @JsonProperty("AIR_IDX")
            private String airIndex;
            @JsonProperty("AIR_IDX_MVL")
            private String airIndexMvl;
            @JsonProperty("AIR_IDX_MAIN")
            private String airIndexMain;
            @JsonProperty("AIR_MSG")
            private String airMessage;
            @JsonProperty("FCST24HOURS")
            private List<Fcst24Hour> forecast24Hours;
            @JsonProperty("NEWS_LIST")
            private List<Object> newsList;

            @Getter
            @NoArgsConstructor
            @AllArgsConstructor
            static class Fcst24Hour {
                @JsonProperty("FCST_DT")
                private String forecastDayTime;
                @JsonProperty("TEMP")
                private String forecast24Temperature;
                @JsonProperty("PRECIPITATION")
                private String precipitation;
                @JsonProperty("PRECPT_TYPE")
                private String precipitationType;
                @JsonProperty("RAIN_CHANCE")
                private String rainChance;
                @JsonProperty("SKY_STTS")
                private String skyStatus;
            }
        }

        @Getter
        @NoArgsConstructor
        @AllArgsConstructor
        static class ChargerStatus {
            @JsonProperty("STAT_NM")
            private String chargerName;
            @JsonProperty("STAT_ID")
            private String chargerID;
            @JsonProperty("STAT_ADDR")
            private String chargerAddress;
            @JsonProperty("STAT_X")
            private String chargerLongitude;
            @JsonProperty("STAT_Y")
            private String chargerLatitude;
            @JsonProperty("STAT_USETIME")
            private String chargerUseTime;
            @JsonProperty("STAT_PARKPAY")
            private String chargerParkPay;
            @JsonProperty("STAT_LIMITYN")
            private String chargerLimitYn;
            @JsonProperty("STAT_LIMITDETAIL")
            private String chargerLimitDetail;
            @JsonProperty("STAT_KINDDETAIL")
            private String chargerKindDetail; // 충전소 장소 유형 (ex. 사업장, 공영주차장)
            @JsonProperty("CHARGER_DETAIL")
            private List<ChargerDetail> chargerDetail;

            @Getter
            @NoArgsConstructor
            @AllArgsConstructor
            static class ChargerDetail {
                @JsonProperty("CHARGER_ID")
                private String chargerID;
                @JsonProperty("CHARGER_TYPE")
                private String chargerType;
                @JsonProperty("CHARGER_STAT")
                private String chargerStatus;
                @JsonProperty("LASTTSDT")
                private String LASTTSDT;
                @JsonProperty("LASTTEDT")
                private String LASTTEDT;
                @JsonProperty("NOWTSDT")
                private String NOWTSDT;
                @JsonProperty("OUTPUT")
                private String OUTPUT;
                @JsonProperty("METHOD")
                private String METHOD;
            }
        }

        @Getter
        @NoArgsConstructor
        @AllArgsConstructor
        static class EventStatus {
            @JsonProperty("EVENT_NM")
            private String eventName;
            @JsonProperty("EVENT_PERIOD")
            private String eventPeriod;
            @JsonProperty("EVENT_PLACE")
            private String eventPlace;
            @JsonProperty("EVENT_X")
            private Double eventLongitude;
            @JsonProperty("EVENT_Y")
            private Double eventYLatitude;
            @JsonProperty("PAY_YN")
            private String payYn;
            @JsonProperty("THUMBNAIL")
            private String thumbnail;
            @JsonProperty("URL")
            private String url;
            @JsonProperty("EVENT_ETC_DETAIL")
            private String eventEtcDetail;
        }
    }
}





