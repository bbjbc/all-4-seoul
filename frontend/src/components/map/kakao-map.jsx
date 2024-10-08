import React, { useEffect, useState } from 'react';

import axios from 'axios';

import MapCategory from './map-category';
import PlaceOverlay from './place-overlay';
import { fetchDataAndDisplayPolygons } from '../../lib/fetch-data';

import OL7 from '../../assets/marker/gas.png';
import PK6 from '../../assets/marker/parking.png';
import CE7 from '../../assets/marker/coffee.png';
import FD6 from '../../assets/marker/restaurant.png';
import AT4 from '../../assets/marker/attractions.png';
import CT1 from '../../assets/marker/culture.png';
import ListMarker from '../../assets/marker/listMarker.png';
import ListPlaceOverlay from './list-place-overlay';
import ListData from '../../data/list-data';

const markerImages = {
  PK6: PK6,
  CE7: CE7,
  OL7: OL7,
  FD6: FD6,
  AT4: AT4,
  CT1: CT1,
};

function KakaoMap() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [listSelectedPlace, setListSelectedPlace] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.555946, 126.972317),
      level: 8,
    };

    const map = new window.kakao.maps.Map(
      document.getElementById('map'),
      mapOption,
    );
    const customOverlay = new window.kakao.maps.CustomOverlay({});
    const ps = new window.kakao.maps.services.Places(map); // 장소 검색 객체

    const polygonArr = [];
    // seoul_data.json 데이터를 받아 폴리곤을 지도에 표시
    const displayPolygons = (jsonData) => {
      const features = jsonData.features;
      for (let i = 0; i < features.length; i++) {
        const feature = features[i];
        const coordinates = feature.geometry.coordinates[0];

        const kakaoCoordinates = coordinates.map(
          (point) => new window.kakao.maps.LatLng(point[1], point[0]),
        );

        const polygon = new window.kakao.maps.Polygon({
          map: map,
          path: kakaoCoordinates,
          strokeWeight: 2,
          strokeColor: '#004c80',
          strokeOpacity: 0.8,
          fillColor: '#fff',
          fillOpacity: 0.7,
        });

        const path = polygon.getPath();
        const centroid = getCentroid(path);

        const customOverlay = new window.kakao.maps.CustomOverlay({
          map: map,
        });

        // 폴리곤에 이름 표시
        customOverlay.setContent(
          '<div class="text-md font-extrabold">' +
            feature.properties.SIG_KOR_NM +
            '</div>',
        );
        customOverlay.setPosition(centroid);

        polygon.setMap(map);
        polygonArr.push(polygon);
        registerPolygonEvents(polygon, feature, polygonArr); // 폴리곤에 이벤트 등록
      }
    };

    // 폴리곤의 중심 좌표를 구하는 함수 → 폴리곤 클릭 시 클릭한 지역 중앙으로 확대
    const getCentroid = (path) => {
      let totalX = 0;
      let totalY = 0;
      const len = path.length;

      path.forEach((point) => {
        totalX += point.getLng();
        totalY += point.getLat();
      });

      return new window.kakao.maps.LatLng(totalY / len, totalX / len);
    };

    // 폴리곤 제거 함수
    const deletePolygon = (polygons) => {
      for (let i = 0; i < polygons.length; i++) {
        polygons[i].setMap(null);
      }
      return [];
    };

    // 폴리곤 클릭 이벤트 함수
    const registerPolygonEvents = (polygon, feature, polygonArr) => {
      window.kakao.maps.event.addListener(polygon, 'click', () => {
        // 클릭한 폴리곤의 정보를 처리할 수 있습니다.
        console.log('이 폴리곤은', feature.properties.SIG_KOR_NM);
        customOverlay.setMap(null);

        // 클릭한 폴리곤을 중심으로 지도 확대
        const path = polygon.getPath();
        const centroid = getCentroid(path);
        map.setCenter(centroid);
        map.setLevel(4, {
          animate: {
            duration: 350,
          },
        });

        // 클릭한 폴리곤을 포함한 모든 폴리곤 제거
        polygonArr = deletePolygon(polygonArr);
      });

      // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이를 표시
      window.kakao.maps.event.addListener(
        polygon,
        'mouseover',
        (mouseEvent) => {
          polygon.setOptions({ fillColor: '#09f' });
          customOverlay.setContent(
            '<div class="absolute bg-orange-100 border-2 border-slate-600 rounded-md text-sm top-[-5px] left-[15px] p-2">' +
              feature.properties.SIG_KOR_NM +
              '</div>',
          );

          customOverlay.setPosition(mouseEvent.latLng);
          customOverlay.setMap(map);
        },
      );

      // 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경
      window.kakao.maps.event.addListener(
        polygon,
        'mousemove',
        (mouseEvent) => {
          customOverlay.setPosition(mouseEvent.latLng);
        },
      );

      // 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이를 제거
      window.kakao.maps.event.addListener(polygon, 'mouseout', () => {
        polygon.setOptions({ fillColor: '#fff' });
        customOverlay.setMap(null);
      });
    };

    fetchDataAndDisplayPolygons(map, '/data/seoul_data.json', displayPolygons);

    // 카테고리 검색 함수
    const searchPlaces = () => {
      if (!currCategory) {
        return;
      }

      placeOverlay.setMap(null);
      removeMarker();

      ps.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
    };

    // 지도 이동 시 검색 함수
    window.kakao.maps.event.addListener(map, 'idle', searchPlaces);

    const placeOverlay = new window.kakao.maps.CustomOverlay();
    const contentNode = document.createElement('div');

    const addEventHandle = (target, type, callback) => {
      if (target.addEventListener) {
        target.addEventListener(type, callback);
      } else {
        target.attachEvent('on' + type, callback);
      }
    };
    addEventHandle(
      contentNode,
      'mousedown',
      window.kakao.maps.event.preventMap,
    );
    addEventHandle(
      contentNode,
      'touchstart',
      window.kakao.maps.event.preventMap,
    );

    // 커스텀 오버레이에 컨텐츠 설정.
    placeOverlay.setContent(contentNode);

    // 장소 검색 결과를 받아오는 콜백함수
    const placesSearchCB = (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        displayPlaces(data);
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        console.error(data);
      }
    };

    // 검색 결과 목록과 마커를 표시하는 함수
    const displayPlaces = (places) => {
      const order = document
        .getElementById(currCategory)
        .getAttribute('data-order');

      for (let i = 0; i < places.length; i++) {
        const marker = addMarker(
          new window.kakao.maps.LatLng(places[i].y, places[i].x),
          order,
        );

        ((marker, place) => {
          window.kakao.maps.event.addListener(marker, 'click', () => {
            displayPlaceInfo(place);
          });
        })(marker, places[i]);
      }
    };

    let listMarkerArr = [];

    const loadAndAddMarkers = () => {
      const data = ListData;
      data.forEach((item) => {
        const position = new window.kakao.maps.LatLng(
          item.latitude,
          item.longitude,
        );
        addListMarker(position, item);
      });
    };

    const addListMarker = (position, data) => {
      const image = ListMarker;
      const imageSize = new window.kakao.maps.Size(45, 45);
      const markerImage = new window.kakao.maps.MarkerImage(image, imageSize);
      const marker = new window.kakao.maps.Marker({
        position: position,
        image: markerImage,
      });

      marker.setMap(map);
      listMarkerArr.push(marker);

      window.kakao.maps.event.addListener(marker, 'click', () => {
        displayListPlaceInfo(data);
      });

      return marker;
    };

    loadAndAddMarkers();

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수
    const addMarker = (position) => {
      const imageSrc = markerImages[currCategory];
      if (!imageSrc) {
        console.error('Invalid category');
        return null;
      }
      const imageSize = new window.kakao.maps.Size(50, 50);
      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
      );
      const marker = new window.kakao.maps.Marker({
        position: position,
        image: markerImage,
      });

      marker.setMap(map);
      markers.push(marker);

      return marker;
    };

    // 지도 위에 표시되고 있는 마커를 모두 제거하는 함수
    const removeMarker = () => {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    };

    // 리스트 마커 클릭 시 장소 정보를 표시하는 함수
    const displayListPlaceInfo = (place) => {
      const info = ListData.find(
        (dataItem) =>
          parseFloat(dataItem.latitude) === parseFloat(place.latitude) &&
          parseFloat(dataItem.longitude) === parseFloat(place.longitude),
      );

      setListSelectedPlace(info);
    };

    // 마커 클릭 시 장소 정보를 표시하는 함수
    const displayPlaceInfo = (place) => {
      setLoading(true);
      setSelectedPlace(place);
      // 장소 이름을 통해 추가 정보를 요청
      const placeName = decodeURIComponent(place.place_name);

      axios
        .get(`/api/places/google/${placeName}`)
        .then((response) => {
          setLoading(false);
          const additionalInfo = response.data;
          console.log(additionalInfo);

          // places 배열의 첫 번째 항목의 displayName.text 값에 접근(장소 이름)
          const displayNameText =
            additionalInfo.places[0]?.displayName?.text || '';

          // userRatingCount
          const userRatingCount =
            additionalInfo.places[0]?.userRatingCount || 0;

          // formattedAddress
          const formattedAddress =
            additionalInfo.places[0]?.formattedAddress || '';

          // nationalPhoneNumber
          const nationalPhoneNumber =
            additionalInfo.places[0]?.nationalPhoneNumber || '';

          // 첫 번째 사진의 photoUri에 접근
          const firstPhotoUri =
            additionalInfo.places[0]?.photos?.[0]?.photoUri || '';

          // rating 평균
          const rating = additionalInfo.places[0]?.rating || 0;

          // 사이트 uri
          const websiteUri = additionalInfo.places[0]?.websiteUri || '';

          // 리뷰 정보 가져오기
          const reviews = additionalInfo.places[0]?.reviews || [];

          // 리뷰 정보를 추출하여 updatedPlace에 추가
          const extractedReviews = reviews.map((review) => ({
            text: review.text?.text || '',
            relativePublishTimeDescription:
              review.relativePublishTimeDescription || '',
            rating: review.rating || 0,
            publishTime: review.publishTime || '',
            displayName: review.authorAttribution?.displayName || '',
          }));

          // 응답 데이터를 포함하여 선택된 장소 정보를 업데이트
          const updatedPlace = {
            ...place,
            ...additionalInfo,
            displayNameText,
            userRatingCount,
            formattedAddress,
            nationalPhoneNumber,
            firstPhotoUri,
            rating,
            websiteUri,
            reviews: extractedReviews,
          };

          // 업데이트된 정보를 설정
          setSelectedPlace(updatedPlace);
          console.log('장소 정보를 가져왔습니다.', updatedPlace);
        })
        .catch((error) => {
          setLoading(false);
          console.error('장소 정보를 가져오는 데 오류가 발생했습니다!', error);
        });
    };

    // 카테고리 클릭 시 이벤트 추가 함수
    const addCategoryClickEvent = () => {
      const category = document.getElementById('category');
      const children = category.children;

      for (let i = 0; i < children.length; i++) {
        children[i].onclick = onClickCategory;
      }
    };

    // 카테고리 클릭 시 실행되는 함수
    const onClickCategory = (event) => {
      const id = event.currentTarget.id;

      placeOverlay.setMap(null);

      if (currCategory === id) {
        currCategory = '';
        removeMarker();
      } else {
        currCategory = id;
        searchPlaces();
      }
    };

    let markers = [];
    let currCategory = '';

    addCategoryClickEvent();
  }, []);

  return (
    <>
      <div id="map" className="h-screen w-full"></div>
      <MapCategory id="category" />
      {selectedPlace && (
        <PlaceOverlay
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
          loading={loading}
        />
      )}
      {listSelectedPlace && (
        <ListPlaceOverlay
          place={listSelectedPlace}
          onClose={() => setListSelectedPlace(null)}
        />
      )}
    </>
  );
}

export default KakaoMap;
