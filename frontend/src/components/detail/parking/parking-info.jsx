import React, { useState, useEffect } from 'react';

import propTypes from 'prop-types';

import parkingImage from '../../../assets/detail-background/parking.jpg';
import { generateParkingData } from '../dummy-data';

function ParkingInfo({ parkingRef, name }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [parkingData, setParkingData] = useState([]);

  useEffect(() => {
    const data = generateParkingData(Math.random() * 20 + 5);
    setParkingData(data);
  }, []);

  const handleAccordion = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main ref={parkingRef} className="relative h-full">
      <section className="flex h-full items-center justify-center">
        <img
          src={parkingImage}
          alt={parkingImage}
          className="absolute z-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <article className="z-10 mt-10 h-3/4 w-1/2 rounded-lg bg-white p-6 shadow-lg">
          <header className="mb-2 text-3xl">
            <h1 className="font-gmarketbold text-orange-600">{name}</h1>
            <span className="font-semibold">주변 주차장 정보</span>
          </header>
          <p className="mb-5 text-lg">
            아래는 총 {parkingData.length}곳의 주차장의 정보입니다.
          </p>

          <article className="h-3/4 overflow-y-auto rounded-lg bg-zinc-100 p-2">
            {parkingData.map((parking) => (
              <div key={parking.id} className="m-2">
                <button
                  className={`flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md transition-all duration-300 ${parking.available ? 'hover:bg-blue-100' : 'hover:bg-red-100'}`}
                  onClick={() => handleAccordion(parking.id)}
                >
                  <h2 className="text-lg font-semibold">{parking.name}</h2>
                  <span
                    className={`font-semibold ${
                      parking.available ? 'text-blue-600' : 'text-red-600'
                    }`}
                  >
                    {parking.available ? '주차 가능' : '주차 불가'}
                  </span>
                </button>

                <div
                  className={`mt-2 overflow-hidden rounded-lg bg-white shadow-md ${parking.available ? 'bg-blue-100' : 'bg-red-100'} ${
                    expandedItems[parking.id]
                      ? 'max-h-96 animate-expand'
                      : 'max-h-0 animate-collapse'
                  }`}
                >
                  <div className="p-4">
                    <p className="mb-2">요금 정보: {parking.fee}</p>
                    <p className="mb-2">개방시간: {parking.openingHours}</p>
                    <p className="mb-2">주차 용량: {parking.capacity}</p>
                    <p className="mb-2">사용 중: {parking.occupied}</p>
                  </div>
                </div>
              </div>
            ))}
          </article>
        </article>
      </section>
    </main>
  );
}

ParkingInfo.propTypes = {
  parkingRef: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
};

export default ParkingInfo;
