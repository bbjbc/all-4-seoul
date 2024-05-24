package com.capstone.all4seoul.scheduler.tasks;

import com.capstone.all4seoul.place.dto.response.externalApi.PlaceSearchResponseBySeoulDataApi;
import com.capstone.all4seoul.seoulCityData.charger.domain.ChargerDetail;
import com.capstone.all4seoul.seoulCityData.charger.domain.ChargerStation;
import com.capstone.all4seoul.seoulCityData.charger.repository.ChargerDetailRepository;
import com.capstone.all4seoul.seoulCityData.charger.repository.ChargerStationRepository;
import com.capstone.all4seoul.seoulCityData.event.domain.AdjacentEvent;
import com.capstone.all4seoul.seoulCityData.event.repository.AdjacentEventRepository;
import com.capstone.all4seoul.seoulCityData.parkingLot.domain.ParkingLot;
import com.capstone.all4seoul.seoulCityData.parkingLot.repository.ParkingLotRepository;
import com.capstone.all4seoul.seoulCityData.population.domain.LivePopulationStatus;
import com.capstone.all4seoul.seoulCityData.population.domain.PopulationForecast;
import com.capstone.all4seoul.seoulCityData.population.repository.PopulationForecastRepository;
import com.capstone.all4seoul.seoulCityData.population.repository.PopulationStatusRepository;
import com.capstone.all4seoul.seoulCityData.weather.domain.WeatherForecast;
import com.capstone.all4seoul.seoulCityData.weather.domain.WeatherStatus;
import com.capstone.all4seoul.seoulCityData.weather.repository.WeatherForecastRepository;
import com.capstone.all4seoul.seoulCityData.weather.repository.WeatherStatusRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

@Slf4j
@Component
@EnableScheduling
@RequiredArgsConstructor
public class ScheduledTasks {
    private final ChargerStationRepository chargerStationRepository;
    private final ChargerDetailRepository chargerDetailRepository;
    private final ParkingLotRepository parkingLotRepository;
    private final AdjacentEventRepository adjacentEventRepository;
    private final PopulationStatusRepository populationStatusRepository;
    private final PopulationForecastRepository populationForecastRepository;
    private final WeatherStatusRepository weatherStatusRepository;
    private final WeatherForecastRepository weatherForecastRepository;

    private PlaceSearchResponseBySeoulDataApi.CityData cityData;

    private static final int THREAD_COUNT = 10; // 스레드 풀의 크기
    private ExecutorService executor = Executors.newFixedThreadPool(THREAD_COUNT);

    /**
     * 서울시 실시간 데이터 병렬 처리 관련 로직 -> 일시 보류 (DB부터 갈아엎어야 됨)
     */
//    public List<CityData> fetchAllData(List<String> keywords) {
//        List<CompletableFuture<CityData>> futures = keywords.stream()
//                .map(keyword -> CompletableFuture.supplyAsync(() -> fetchSeoulCityData(keyword), executor))
//                .collect(Collectors.toList());
//
//        return futures.stream()
//                .map(CompletableFuture::join)
//                .collect(Collectors.toList());
//    }
//
//    private CityData fetchSeoulCityData(String keyword) {
//        RestTemplate restTemplate = new RestTemplate();
//
//        String seoulDataApiKey = "47725179416177663634557a734f45";
//        String url = "http://openapi.seoul.go.kr:8088/" + seoulDataApiKey + "/json/citydata/1/5/" + keyword;
//
//        ResponseEntity<PlaceSearchResponseBySeoulDataApi> response = restTemplate.exchange(
//                url,
//                HttpMethod.GET,
//                null,
//                PlaceSearchResponseBySeoulDataApi.class
//        );
//
//        return Objects.requireNonNull(response.getBody()).getCityData();
//    }

    @Scheduled(fixedRate = 30, timeUnit = TimeUnit.SECONDS) // 1분마다 실행
    public void fetchSeoulCityData() {
        RestTemplate restTemplate = new RestTemplate();

        String seoulDataApiKey = "47725179416177663634557a734f45";
        String keyword = "광화문·덕수궁";
        String url = "http://openapi.seoul.go.kr:8088/" + seoulDataApiKey + "/json/citydata/1/5/" + keyword;

        ResponseEntity<PlaceSearchResponseBySeoulDataApi> responseEntity = restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                PlaceSearchResponseBySeoulDataApi.class
        );

        cityData = Objects.requireNonNull(responseEntity.getBody()).getCityData();
    }

    @Scheduled(fixedRate = 24, timeUnit = TimeUnit.HOURS)
    private void saveAdjacentEvents() {
        adjacentEventRepository.updateLatestByLatestTrue();
        cityData.getAdjacentEvents()
                .forEach(event -> {
                    AdjacentEvent eventEntity = AdjacentEvent.createAdjacentEvent(
                            event.getName(),
                            event.getPeriod(),
                            event.getPlace(),
                            event.getLongitude(),
                            event.getLatitude(),
                            event.getPayYn(),
                            event.getThumbnail(),
                            event.getUrl(),
                            event.getEtcDetail()
                    );
                    adjacentEventRepository.save(eventEntity);
                });
    }

    @Scheduled(fixedRate = 24, timeUnit = TimeUnit.HOURS)
    private void saveParkingLots() {
        parkingLotRepository.updateLatestByLatestTrue();
        cityData.getAdjacentParkingLots()
                .forEach(parkingLot -> {
                            ParkingLot parkingLotEntity = ParkingLot.createParkingLot(
                                    parkingLot.getName(),
                                    parkingLot.getCode(),
                                    parkingLot.getCapacity(),
                                    parkingLot.getCurrentParkingCount(),
                                    parkingLot.getCurrentParkingTime(),
                                    parkingLot.getCurrentParkingYn(),
                                    parkingLot.getPayYn(),
                                    parkingLot.getRates(),
                                    parkingLot.getTimeRates(),
                                    parkingLot.getAddRates(),
                                    parkingLot.getAddTimeRates(),
                                    parkingLot.getAddress(),
                                    parkingLot.getRoadAddr(),
                                    parkingLot.getLongitude(),
                                    parkingLot.getLatitude()
                            );
                            parkingLotRepository.save(parkingLotEntity);
                        }
                );
    }

    @Scheduled(fixedRate = 30, timeUnit = TimeUnit.SECONDS)
    private void saveChargerStations() {
        chargerStationRepository.updateLatestByLatestTrue();
        chargerDetailRepository.updateLatestByLatestTrue();
        cityData.getAdjacentChargerStations()
                .forEach(chargerStation -> {
                            ChargerStation chargerStationEntity = ChargerStation.createChargerStation(
                                    chargerStation.getName(),
                                    chargerStation.getStationId(),
                                    chargerStation.getAddress(),
                                    chargerStation.getLongitude(),
                                    chargerStation.getLatitude(),
                                    chargerStation.getUseTime(),
                                    chargerStation.getParkPay(),
                                    chargerStation.getLimitYn(),
                                    chargerStation.getLimitDetail(),
                                    chargerStation.getKindDetail()
                            );

                            chargerStation.getChargerDetails()
                                    // 연관관계 설정을 위해 create 메소드를 사용하였고, 엔티티 변수 저장은 하지 않았음
                                    .forEach(chargerDetail -> ChargerDetail.createChargerDetail(
                                            chargerDetail.getChargerId(),
                                            chargerDetail.getType(),
                                            chargerDetail.getStatus(),
                                            chargerStationEntity)
                                    );

                            chargerStationRepository.save(chargerStationEntity);
                        }
                );
    }

    @Scheduled(fixedRate = 30, timeUnit = TimeUnit.SECONDS)
    private void savePopulationStatus() {
        populationStatusRepository.updateLatestByLatestTrue();
        populationForecastRepository.updateLatestByLatestTrue();
        cityData.getLivePopulationStatus()
                .forEach(livePopulationStatus -> {
                            LivePopulationStatus livePopulationStatusEntity = LivePopulationStatus.createLivePopulationStatus(
                                    livePopulationStatus.getAreaCongestLevel(),
                                    livePopulationStatus.getAreaCongestMessage(),
                                    livePopulationStatus.getMinimumAreaPopulation(),
                                    livePopulationStatus.getMaximumAreaPopulation(),
                                    livePopulationStatus.getMalePopulationRate(),
                                    livePopulationStatus.getFemalePopulationRate(),
                                    livePopulationStatus.getPopulationRate0(),
                                    livePopulationStatus.getPopulationRate10(),
                                    livePopulationStatus.getPopulationRate20(),
                                    livePopulationStatus.getPopulationRate30(),
                                    livePopulationStatus.getPopulationRate40(),
                                    livePopulationStatus.getPopulationRate50(),
                                    livePopulationStatus.getPopulationRate60(),
                                    livePopulationStatus.getPopulationRate70(),
                                    livePopulationStatus.getResentPopulationRate(),
                                    livePopulationStatus.getNonResentPopulationRate(),
                                    livePopulationStatus.getReplaceYn(),
                                    livePopulationStatus.getPopulationTime(),
                                    livePopulationStatus.getForecastYn()
                            );

                            livePopulationStatus.getForecastPopulation()
                                    .forEach(populationForecast -> PopulationForecast.createPopulationForecast(
                                                    populationForecast.getTime(),
                                                    populationForecast.getCongestLevel(),
                                                    populationForecast.getMinimumForecastPopulation(),
                                                    populationForecast.getMaximumForecastPopulation(),
                                                    livePopulationStatusEntity
                                            )
                                    );

                            populationStatusRepository.save(livePopulationStatusEntity);
                        }
                );
    }

    @Scheduled(fixedRate = 15, timeUnit = TimeUnit.MINUTES)
    private void saveWeatherStatus() {
        weatherStatusRepository.updateLatestByLatestTrue();
        weatherForecastRepository.updateLatestByLatestTrue();
        cityData.getWeatherStatus()
                .forEach(weatherStatus -> {
                            WeatherStatus weatherStatusEntity = WeatherStatus.createWeatherStatus(
                                    weatherStatus.getTime(),
                                    weatherStatus.getTemperature(),
                                    weatherStatus.getSensibleTemperature(),
                                    weatherStatus.getMaximumTemperature(),
                                    weatherStatus.getMinimumTemperature(),
                                    weatherStatus.getHumidity(),
                                    weatherStatus.getPrecipitation(),
                                    weatherStatus.getPrecipitationType(),
                                    weatherStatus.getPrecipitationMessage(),
                                    weatherStatus.getUvIndexLevel(),
                                    weatherStatus.getUvIndex(),
                                    weatherStatus.getUvMessage(),
                                    weatherStatus.getPm25Index(),
                                    weatherStatus.getPm25(),
                                    weatherStatus.getPm10Index(),
                                    weatherStatus.getPm10(),
                                    weatherStatus.getAirIndex(),
                                    weatherStatus.getAirIndexMvl(),
                                    weatherStatus.getAirIndexMain(),
                                    weatherStatus.getAirMessage()
                            );

                            weatherStatus.getWeatherForecasts()
                                    .forEach(weatherForecast -> WeatherForecast.createWeatherForecast(
                                                    weatherForecast.getDayTime(),
                                                    weatherForecast.getTemperature24Hour(),
                                                    weatherForecast.getPrecipitation(),
                                                    weatherForecast.getPrecipitationType(),
                                                    weatherForecast.getRainChance(),
                                                    weatherForecast.getSkyStatus(),
                                                    weatherStatusEntity
                                            )
                                    );

                            weatherStatusRepository.save(weatherStatusEntity);
                        }
                );
    }
}
