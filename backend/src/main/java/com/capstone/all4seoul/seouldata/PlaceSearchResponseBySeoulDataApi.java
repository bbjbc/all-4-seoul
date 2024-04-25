package com.capstone.all4seoul.seouldata;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class PlaceSearchResponseBySeoulDataApi {
    @JsonProperty("list_total_count")
    private Long listTotalCount;
    @JsonProperty("RESULT")

    private Result result;
    @JsonProperty("CITYDATA")

    private CityData cityData;

}

class Result {
    @JsonProperty("RESULT.CODE")
    private String resultCode;
    @JsonProperty("RESULT.MESSAGE")
    private String resultMessage;
}
class CityData {
    @JsonProperty("AREA_NM")
    private String areaName;
    @JsonProperty("AREA_CD")
    private String areaCode;
    @JsonProperty("LIVE_PPLTN_STTS")
    private List<LivePpltnStt> livePopulation;
    @JsonProperty("ROAD_TRAFFIC_STTS")
    private RoadTrafficStts roadTrafficStatus;
    @JsonProperty("PRK_STTS")
    private List<PrkStt> parkingLotStatus;
    @JsonProperty("WEATHER_STTS")
    private List<WeatherStt> weatherStatus;
    @JsonProperty("CHARGER_STTS")
    private List<ChargerStt> chargerStatus;
    @JsonProperty("EVENT_STTS")
    private List<EventStt> eventStatus;
}

class LivePpltnStt {
    @JsonProperty("AREA_CONGEST_LVL")
    private String areaCongestLvl;
    @JsonProperty("AREA_CONGEST_MSG")
    private String areaCongestMsg;
    @JsonProperty("AREA_PPLTN_MIN")
    private String areaPpltnMin;
    @JsonProperty("AREA_PPLTN_MAX")
    private String areaPpltnMax;
    @JsonProperty("AREA_PPLTN_MAX")
    private String malePpltnRate;
    @JsonProperty("FEMALE_PPLTN_RATE")
    private String femalePpltnRate;
    @JsonProperty("PPLTN_RATE_0")
    private String ppltnRate0;
    @JsonProperty("PPLTN_RATE_10")
    private String ppltnRate10;
    @JsonProperty("PPLTN_RATE_20")
    private String ppltnRate20;
    @JsonProperty("PPLTN_RATE_30")
    private String ppltnRate30;
    @JsonProperty("PPLTN_RATE_40")
    private String ppltnRate40;
    @JsonProperty("PPLTN_RATE_50")
    private String ppltnRate50;
    @JsonProperty("PPLTN_RATE_60")
    private String ppltnRate60;
    @JsonProperty("PPLTN_RATE_70")
    private String ppltnRate70;
    @JsonProperty("RESNT_PPLTN_RATE")
    private String resntPpltnRate;
    @JsonProperty("NON_RESNT_PPLTN_RATE")
    private String nonResntPpltnRate;
    @JsonProperty("REPLACE_YN")
    private String replaceYn;
    @JsonProperty("PPLTN_TIM")
    private String ppltnTime;
    @JsonProperty("FCST_YN")
    private String forecastYn;
    @JsonProperty("FCST_PPLTN")
    private List<FcstPpltn> forecastPpltn;
}

class FcstPpltn {
    @JsonProperty("FCST_TIME")
    private String forecastTime;
    @JsonProperty("FCST_CONGEST_LVL")
    private String forecastCongestLvl;
    @JsonProperty("FCST_PPLTN_MIN")
    private String forecastPpltnMin;
    @JsonProperty("FCST_PPLTN_MAX")
    private String forecastPpltnMax;
}

class RoadTrafficStts {
    @JsonProperty("AVG_ROAD_DATA")
    private AvgRoadData avgRoadData;
}

class AvgRoadData {
    @JsonProperty("ROAD_MSG")
    private String roadMsg;
    @JsonProperty("ROAD_TRAFFIC_IDX")
    private String roadTrafficIdx;
    @JsonProperty("ROAD_TRFFIC_TIME")
    private String roadTrfficTime;
    @JsonProperty("ROAD_TRAFFIC_SPD")
    private Long roadTrafficSpd;
}

class PrkStt {
    @JsonProperty("PRK_NM")
    private String parkingName;
    @JsonProperty("PRK_CD")
    private String parkingCode;
    @JsonProperty("CPCITY")
    private String capacity;
    @JsonProperty("CUR_PRK_CNT")
    private String currentParkingCount;
    @JsonProperty("CUR_PRK_TIME")
    private String currentParkingkTime;
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
    private String lng;
    @JsonProperty("LAT")
    private String lat;
}

class WeatherStt {
    @JsonProperty("WEATHER_TIME")
    private String weatherTime;
    @JsonProperty("TEMP")
    private String temp;
    @JsonProperty("SENSIBLE_TEMP")
    private String sensibleTemp;
    @JsonProperty("MAX_TEMP")
    private String maxTemp;
    @JsonProperty("MIN_TEMP")
    private String minTemp;
    @JsonProperty("HUMIDITY")
    private String humidity;
    @JsonProperty("PRECIPITATION")
    private String precipitation;
    @JsonProperty("PRECPT_TYPE")
    private String precipitationType;
    @JsonProperty("PCP_MSG")
    private String precipitationMsg;
    @JsonProperty("UV_INDEX_LVL")
    private String uvIndexLvl;
    @JsonProperty("UV_INDEX")
    private String uvIndex;
    @JsonProperty("UV_MSG")
    private String uvMsg;
    @JsonProperty("PM25_INDEX")
    private String ParticulateMatter25Index;
    @JsonProperty("PM25")
    private String ParticulateMatter25;
    @JsonProperty("PM10_INDEX")
    private String ParticulateMatter10Index;
    @JsonProperty("PM10")
    private String ParticulateMatter10;
    @JsonProperty("AIR_IDX")
    private String airIdx;
    @JsonProperty("AIR_IDX_MVL")
    private String airIdxMvl;
    @JsonProperty("AIR_IDX_MAIN")
    private String airIdxMain;
    @JsonProperty("AIR_MSG")
    private String airMsg;
    @JsonProperty("FCST24HOURS")
    private List<Fcst24Hour> forecast24Hours;
    @JsonProperty("NEWS_LIST")
    private List<Object> newsList;
}

class ChargerStt {
    @JsonProperty("STAT_NM")
    private String ChargerName;
    @JsonProperty("STAT_ID")
    private String ChargerID;
    @JsonProperty("STAT_ADDR")
    private String ChargerAddress;
    @JsonProperty("STAT_X")
    private String ChargerLongitude;
    @JsonProperty("STAT_Y")
    private String ChargerLatitude;
    @JsonProperty("STAT_USETIME")
    private String ChargerUsetime;
    @JsonProperty("STAT_PARKPAY")
    private String ChargerParkpay;
    @JsonProperty("STAT_LIMITYN")
    private String ChargerLimityn;
    @JsonProperty("STAT_LIMITDETAIL")
    private String ChargerLimitdetail;
    @JsonProperty("STAT_KINDDETAIL")
    private String ChargerKinddetail;
    @JsonProperty("CHARGER_DETAIL")
    private List<ChargerDetail> ChargerDetail;
}

class ChargerDetail {
    @JsonProperty("CHARGER_ID")
    private String ChargerID;
    @JsonProperty("CHARGER_TYPE")
    private String ChargerType;
    @JsonProperty("CHARGER_STAT")
    private String ChargerStatus;
}

class EventStt {
    @JsonProperty("EVENT_NM")
    private String eventName;
    @JsonProperty("EVENT_PERIOD")
    private String eventPeriod;
    @JsonProperty("EVENT_PLACE")
    private String eventPlace;
    @JsonProperty("EVENT_X")
    private Double eventLongtitude;
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

class Fcst24Hour {
    @JsonProperty("FCST_DT")
    private String forecastDayTime;
    @JsonProperty("TEMP")
    private String forecast24temp;
    @JsonProperty("PRECIPITATION")
    private String precipitation;
    @JsonProperty("PRECPT_TYPE")
    private String precipitationType;
    @JsonProperty("RAIN_CHANCE")
    private String rainChance;
    @JsonProperty("SKY_STTS")
    private String skyStatus;
}