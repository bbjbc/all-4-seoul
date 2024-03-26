import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=4a47a86d01a26dadc335da6507ed2137';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      new window.kakao.maps.Map(mapContainer, mapOption);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
}

export default Map;
