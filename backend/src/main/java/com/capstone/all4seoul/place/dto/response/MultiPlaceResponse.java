package com.capstone.all4seoul.place.dto.response;

import com.capstone.all4seoul.place.domain.Place;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MultiPlaceResponse {
    private List<Item> places;

    public static MultiPlaceResponse of(List<Place> places) {
        MultiPlaceResponse multiPlaceResponse = new MultiPlaceResponse();

        multiPlaceResponse.places = places.stream()
                .map(Item::of)
                .toList();

        return multiPlaceResponse;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Item {
        private Long id;
        private String name;
        private int bookmarkCount;
        private int reviewCount;
        private double rating;
        private String category;
        private String address;
        private double x;
        private double y;

        public static Item of(Place place) {
            Item item = new Item();

            item.id = place.getId();
            item.name = place.getName();
            item.bookmarkCount = place.getBookmarks().size();
            item.reviewCount = place.getReviews().size();
            item.rating = place.getRating();
            item.category = place.getCategory().getCode();
            item.address = place.getAddress();
            double[] location = getLocation(item.getAddress());
            item.x = location[0];
            item.y = location[1];

            return item;
        }

        private static double[] getLocation(String address) {
            String apiUrl = "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=" + address;

            // 요청 헤더 설정
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("X-NCP-APIGW-API-KEY-ID", "owq669zumn");
            headers.set("X-NCP-APIGW-API-KEY", "n2XaX8h8SWC3Xpe7SZgvWLEwc0WhgTPEqCc3t6ll");

            HttpEntity<String> entity = new HttpEntity<>(headers);

            // HTTP 요청 보내기
            ResponseEntity<GeocodingResponseByNaver> responseEntity = new RestTemplate().exchange(
                    apiUrl,
                    HttpMethod.GET,
                    entity,
                    GeocodingResponseByNaver.class
            );

            GeocodingResponseByNaver responseBody = responseEntity.getBody();

            return new double[]{
                    responseBody.getAddresses().get(0).getY(),
                    responseBody.getAddresses().get(0).getY()
            };
        }
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class GeocodingResponseByNaver {
        private String status;
        private MetaData meta;
        private List<Address> addresses;
        private String errorMessage;

        @Getter
        @NoArgsConstructor
        @AllArgsConstructor
        public static class MetaData {
            private int totalCount;
            private int page;
            private int count;
        }

        @Getter
        @NoArgsConstructor
        @AllArgsConstructor
        public static class Address {
            private String roadAddress;
            private String jibunAddress;
            private String englishAddress;
            private List<AddressElement> addressElements;
            private double x;
            private double y;
            private double distance;
        }

        @Getter
        @NoArgsConstructor
        @AllArgsConstructor
        public static class AddressElement {
            private List<String> types;
            private String longName;
            private String shortName;
            private String code;
        }
    }
}