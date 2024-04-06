import React, { useEffect } from 'react';

import { LuParkingCircle } from 'react-icons/lu';
import { MdOutlineEventAvailable } from 'react-icons/md';

function KakaoMap() {
  useEffect(() => {
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.555946, 126.972317),
      level: 5,
    };

    const map = new window.kakao.maps.Map(
      document.getElementById('map'),
      mapOption,
    );
    const ps = new window.kakao.maps.services.Places(map); // 장소 검색 객체

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

        (function (marker, place) {
          window.kakao.maps.event.addListener(marker, 'click', function () {
            displayPlaceInfo(place);
          });
        })(marker, places[i]);
      }
    };

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수
    const addMarker = (position, order) => {
      const imageSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png';
      const imageSize = new window.kakao.maps.Size(27, 28);
      const imgOptions = {
        spriteSize: new window.kakao.maps.Size(72, 208),
        spriteOrigin: new window.kakao.maps.Point(46, order * 36),
        offset: new window.kakao.maps.Point(11, 28),
      };
      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imgOptions,
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
      const content = `
        <div class="absolute left-0 w-72 bg-white border border-gray-300 rounded-md shadow-md">
          <div class="font-bold px-4 py-2 bg-red-500 text-white rounded-t-md">${place.place_name}</div>
          <div class="p-4">
            <div class="mb-2">
              <a href="${place.place_url}" target="_blank" class="text-blue-500 hover:underline">${place.place_name}</a>
            </div>
            ${
              place.road_address_name
                ? `<div title="${place.road_address_name}" class="text-sm">${place.road_address_name}</div>`
                : ''
            }
            ${
              place.address_name
                ? `<div title="${place.address_name}" class="text-sm">(지번 : ${place.address_name})</div>`
                : ''
            }
            <div class="text-sm tel text-green-600">${place.phone}</div>
          </div>
          <div class="absolute after left-1/2 transform -translate-x-1/2 bottom-0 w-22 h-12 bg-no-repeat" style="background-image: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');"></div>
        </div>
      `;

      contentNode.innerHTML = content;
      placeOverlay.setPosition(new window.kakao.maps.LatLng(place.y, place.x));
      placeOverlay.setMap(map);
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
      <div
        id="category"
        className="absolute left-16 top-32 z-20 flex flex-col gap-5"
      >
        <button
          className="flex cursor-pointer items-center rounded-full border-2 border-gray-600 bg-zinc-100 px-3 py-1 text-center shadow-xl hover:bg-slate-200 focus:bg-yellow-100"
          id="BK9"
          data-order="0"
        >
          <LuParkingCircle size={20} />
          <span className="ml-1">은행</span>
        </button>
        <button
          className="flex cursor-pointer items-center rounded-full border-2 border-gray-600 bg-zinc-100 px-3 py-1 text-center shadow-xl hover:bg-slate-200 focus:bg-yellow-100"
          id="MT1"
          data-order="1"
        >
          <MdOutlineEventAvailable size={20} />
          <span className="ml-1">마트</span>
        </button>
        <button
          className="flex cursor-pointer items-center rounded-full border-2 border-gray-600 bg-zinc-100 px-3 py-1 text-center shadow-xl hover:bg-slate-200 focus:bg-yellow-100"
          id="PM9"
          data-order="2"
        >
          <LuParkingCircle size={20} />
          <span className="ml-1">약국</span>
        </button>
        <button
          className="flex cursor-pointer items-center rounded-full border-2 border-gray-600 bg-zinc-100 px-3 py-1 text-center shadow-xl hover:bg-slate-200 focus:bg-yellow-100"
          id="OL7"
          data-order="3"
        >
          <LuParkingCircle size={20} />
          <span className="ml-1">주유소</span>
        </button>
        <button
          className="flex cursor-pointer items-center rounded-full border-2 border-gray-600 bg-zinc-100 px-3 py-1 text-center shadow-xl hover:bg-slate-200 focus:bg-yellow-100"
          id="CE7"
          data-order="4"
        >
          <LuParkingCircle size={20} />
          <span className="ml-1">카페</span>
        </button>
        <button
          className="flex cursor-pointer items-center rounded-full border-2 border-gray-600 bg-zinc-100 px-3 py-1 text-center shadow-xl hover:bg-slate-200 focus:bg-yellow-100"
          id="CS2"
          data-order="5"
        >
          <LuParkingCircle size={20} />
          <span className="ml-1">편의점</span>
        </button>
      </div>
    </>
  );
}

export default KakaoMap;
