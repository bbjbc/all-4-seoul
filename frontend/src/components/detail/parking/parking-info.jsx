import React, { useState } from 'react';

import propTypes from 'prop-types';

import parkingImage from '../../../assets/detail-background/parking.jpg';

function ParkingInfo({
  parkingRef,
  name,
  parkingLots = [],
  chargerStations = [],
}) {
  const [expandedItems, setExpandedItems] = useState({});

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
            <span className="font-semibold">주변 주차장 및 충전소 정보</span>
          </header>
          <p className="mb-5 text-lg">
            아래는 총 {parkingLots.length}곳의 주차장 정보와{' '}
            {chargerStations.length}곳의 충전소 정보입니다.
          </p>

          <article className="h-3/4 overflow-y-auto rounded-lg bg-zinc-100 p-2">
            {parkingLots.map((parking) => (
              <div key={parking.code} className="m-2">
                <button
                  className={`flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md transition-all duration-300 ${parking.capacity - parking.currentParkingCount > 0 ? 'hover:bg-blue-100' : 'hover:bg-red-100'}`}
                  onClick={() => handleAccordion(parking.code)}
                >
                  <h2 className="text-lg font-semibold">{parking.name}</h2>
                  <span
                    className={`font-semibold ${
                      parking.capacity - parking.currentParkingCount > 0
                        ? 'text-blue-600'
                        : 'text-red-600'
                    }`}
                  >
                    {parking.capacity - parking.currentParkingCount > 0
                      ? '주차 가능'
                      : '주차 불가'}
                  </span>
                </button>

                <div
                  className={`mt-2 overflow-hidden rounded-lg bg-white shadow-md ${parking.capacity - parking.currentParkingCount > 0 ? 'bg-blue-100' : 'bg-red-100'} ${
                    expandedItems[parking.code]
                      ? 'max-h-96 animate-expand'
                      : 'max-h-0 animate-collapse'
                  }`}
                >
                  <div className="p-4">
                    <p className="mb-2">요금 정보: {parking.rates}</p>
                    <p className="mb-2">
                      개방시간: {parking.currentParkingTime}
                    </p>
                    <p className="mb-2">주소: {parking.currentParkingTime}</p>
                    <p className="mb-2">주차 용량: {parking.address}</p>
                    <p className="mb-2">시간머시기: {parking.timeRates}</p>
                    <p className="mb-2">추가 비용: {parking.addRates}</p>
                    <p className="mb-2">
                      추가 시간 비용: {parking.addTimeRates}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {chargerStations.map((charger, index) => (
              <div key={`charger-${index}`} className="m-2">
                <button
                  className="flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:bg-green-100"
                  onClick={() => handleAccordion(`charger-${index}`)}
                >
                  <h2 className="text-lg font-semibold">{charger.name}</h2>
                  <span className="font-semibold text-green-600">충전소</span>
                </button>

                <div
                  className={`mt-2 overflow-hidden rounded-lg bg-white shadow-md ${
                    expandedItems[`charger-${index}`]
                      ? 'max-h-96 animate-expand'
                      : 'max-h-0 animate-collapse'
                  }`}
                >
                  <div className="p-4">
                    <p className="mb-2">주소: {charger.address}</p>
                    <p className="mb-2">사용 시간: {charger.useTime}</p>
                    <p className="mb-2">주차 요금: {charger.parkPay}</p>
                    <p className="mb-2">
                      제한 여부: {charger.limitYn ? '있음' : '없음'}
                    </p>
                    <p className="mb-2">제한 상세: {charger.limitDetail}</p>
                    <p className="mb-2">종류 상세: {charger.kindDetail}</p>
                    <ul className="list-inside list-disc">
                      {charger.chargerDetails.map((c) => (
                        <li key={c.id}>
                          ID: {c.chargerId}, 타입: {c.type}, 상태: {c.status}
                        </li>
                      ))}
                    </ul>
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
  parkingLots: propTypes.array,
  chargerStations: propTypes.array,
};

export default ParkingInfo;
