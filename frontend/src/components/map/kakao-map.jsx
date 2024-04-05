import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.555946, 126.972317),
      level: 5,
    };

    const map = new window.kakao.maps.Map(
      document.getElementById('map'),
      mapOption,
    );
    const ps = new window.kakao.maps.services.Places(map);

    const searchPlaces = () => {
      if (!currCategory) {
        return;
      }

      placeOverlay.setMap(null);
      removeMarker();

      ps.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
    };

    window.kakao.maps.event.addListener(map, 'idle', searchPlaces);

    const placeOverlay = new window.kakao.maps.CustomOverlay({ zIndex: 1 });
    const contentNode = document.createElement('div');
    contentNode.className = 'placeinfo_wrap';

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

    const placesSearchCB = (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        displayPlaces(data);
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        // Handle zero result case
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        // Handle error case
      }
    };

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

    const removeMarker = () => {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    };

    const displayPlaceInfo = (place) => {
      let content =
        '<div class="placeinfo">' +
        '   <a class="title" href="' +
        place.place_url +
        '" target="_blank" title="' +
        place.place_name +
        '">' +
        place.place_name +
        '</a>';

      if (place.road_address_name) {
        content +=
          '    <span title="' +
          place.road_address_name +
          '">' +
          place.road_address_name +
          '</span>' +
          '  <span class="jibun" title="' +
          place.address_name +
          '">(지번 : ' +
          place.address_name +
          ')</span>';
      } else {
        content +=
          '    <span title="' +
          place.address_name +
          '">' +
          place.address_name +
          '</span>';
      }

      content +=
        '    <span class="tel">' +
        place.phone +
        '</span>' +
        '</div>' +
        '<div class="after"></div>';

      contentNode.innerHTML = content;
      placeOverlay.setPosition(new window.kakao.maps.LatLng(place.y, place.x));
      placeOverlay.setMap(map);
    };

    const addCategoryClickEvent = () => {
      const category = document.getElementById('category');
      const children = category.children;

      for (let i = 0; i < children.length; i++) {
        children[i].onclick = onClickCategory;
      }
    };

    const onClickCategory = (event) => {
      const id = event.target.id;
      const className = event.target.className;

      placeOverlay.setMap(null);

      if (className === 'on') {
        currCategory = '';
        changeCategoryClass();
        removeMarker();
      } else {
        currCategory = id;
        changeCategoryClass(event.target);
        searchPlaces();
      }
    };

    const changeCategoryClass = (el) => {
      const category = document.getElementById('category');
      const children = category.children;

      for (let i = 0; i < children.length; i++) {
        children[i].className = '';
      }

      if (el) {
        el.className = 'on';
      }
    };

    let markers = [];
    let currCategory = '';

    addCategoryClickEvent();
  }, []);

  return (
    <div className="map_wrap">
      <div id="map" style={{ width: '100%', height: '100vh' }}>
        <ul id="category">
          <li id="BK9" data-order="0">
            <span className="category_bg bank"></span>
            은행
          </li>
          <li id="MT1" data-order="1">
            <span className="category_bg mart"></span>
            마트
          </li>
          <li id="PM9" data-order="2">
            <span className="category_bg pharmacy"></span>
            약국
          </li>
          <li id="OL7" data-order="3">
            <span className="category_bg oil"></span>
            주유소
          </li>
          <li id="CE7" data-order="4">
            <span className="category_bg cafe"></span>
            카페
          </li>
          <li id="CS2" data-order="5">
            <span className="category_bg store"></span>
            편의점
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MapComponent;
