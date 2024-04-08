import React, { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';

import MapCategory from './map-category';
import PlaceOverlay from './place-overlay';
import OL7 from '../../assets/marker/gas.png';
import PK6 from '../../assets/marker/parking.png';
import CE7 from '../../assets/marker/coffee.png';
import FD6 from '../../assets/marker/restaurant.png';
import AT4 from '../../assets/marker/attractions.png';
import CT1 from '../../assets/marker/culture.png';

const markerImages = {
  PK6: PK6,
  CE7: CE7,
  OL7: OL7,
  FD6: FD6,
  AT4: AT4,
  CT1: CT1,
};

function KakaoMap() {
  useEffect(() => {
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.555946, 126.972317),
      level: 8,
    };

    const map = new window.kakao.maps.Map(
      document.getElementById('map'),
      mapOption,
    );
    const ps = new window.kakao.maps.services.Places(map); // 장소 검색 객체

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

        polygon.setMap(map);
        registerPolygonEvents(polygon, feature); // 폴리곤에 이벤트 등록
      }
    };

    // 폴리곤 클릭 이벤트 함수
    const registerPolygonEvents = (polygon, feature) => {
      window.kakao.maps.event.addListener(polygon, 'click', () => {
        // 클릭한 폴리곤의 정보를 처리할 수 있습니다.
        console.log('이 폴리곤은', feature.properties.SIG_KOR_NM);
      });
    };

    const fetchDataAndDisplayPolygons = async () => {
      try {
        // Fetch를 통해 GeoJSON 데이터 가져오기
        const response = await fetch('/data/seoul_data.json');
        if (!response.ok) {
          throw new Error('데이터를 가져오는 데 실패했습니다.');
        }
        const data = await response.json();

        // 가져온 GeoJSON 데이터를 활용하여 폴리곤 표시
        displayPolygons(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchDataAndDisplayPolygons();

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

    // 마커 클릭 시 장소 정보를 표시하는 커스텀 오버레이를 표시하는 함수
    const displayPlaceInfo = (place) => {
      // jsx는 js 객체이기 때문에 문자열로 변환하여 innerHTML에 넣어줘야 함
      // innerHTML에 넣어주기 위해 ReactDOMServer.renderToString() 사용
      const content = ReactDOMServer.renderToString(
        <PlaceOverlay place={place} id="closeOverlay" />,
      );

      contentNode.innerHTML = content;
      placeOverlay.setPosition(new window.kakao.maps.LatLng(place.y, place.x));
      placeOverlay.setMap(map);

      // 오버레이 닫기 버튼 이벤트
      const closeOverlayBtn = document.getElementById('closeOverlay');
      if (closeOverlayBtn) {
        closeOverlayBtn.addEventListener('click', () => {
          placeOverlay.setMap(null);
        });
      }

      // 지도 클릭 시 오버레이 닫기
      window.kakao.maps.event.addListener(map, 'click', () => {
        placeOverlay.setMap(null);
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
    </>
  );
}

export default KakaoMap;
