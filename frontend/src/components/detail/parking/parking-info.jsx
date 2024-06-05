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

          {parkingLots.length === 0 && chargerStations.length === 0 ? (
            <div className="m-2 flex h-96 w-full items-center justify-center">
              <p className="animate-bounce text-center text-xl font-semibold">
                주변에 주차장 및 충전소 정보가 없습니다.
              </p>
            </div>
          ) : (
            <article className="h-3/4 overflow-y-auto rounded-lg bg-zinc-100 p-2">
              {parkingLots.map((parking) => (
                <div key={`parking-${parking.id}`} className="m-2">
                  <button
                    className="flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:bg-blue-100"
                    onClick={() => handleAccordion(`parking-${parking.id}`)}
                  >
                    <h2 className="text-lg font-semibold">{parking.name}</h2>
                    <span className="font-semibold text-blue-600">주차장</span>
                  </button>

                  <div
                    className={`mt-2 overflow-hidden rounded-lg bg-white shadow-md ${
                      expandedItems[`parking-${parking.id}`]
                        ? 'max-h-96 animate-expand'
                        : 'max-h-0 animate-collapse'
                    }`}
                  >
                    <div className="p-4">
                      <p className="mb-2">
                        {parking.payYn === 'Y' || parking.payYn === '유료'
                          ? '유료 주차장'
                          : '무료 주차장'}
                      </p>
                      {parking.payYn === '무료' || parking.payYn === 'N' ? (
                        <>
                          <p className="mb-2 text-blue-500">
                            무료로 이용하시면 됩니다!
                          </p>
                          <p
                            className={`mb-2 ${
                              parking.currentParkingYn === 'Y'
                                ? 'text-blue-500'
                                : 'text-red-500'
                            }`}
                          >
                            {parking.currentParkingYn === 'Y'
                              ? '현재 주차 가능합니다'
                              : '현재 주차 불가능합니다.'}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="mb-2">
                            요금 정보: 시간 당 {parking.timeRates}원
                          </p>
                          <p className="mb-2">주소: {parking.address}</p>
                          <p
                            className={`mb-2 ${
                              parking.currentParkingYn === 'Y'
                                ? 'text-blue-500'
                                : 'text-red-500'
                            }`}
                          >
                            {parking.currentParkingYn === 'Y'
                              ? '현재 주차 가능합니다'
                              : '현재 주차 불가능합니다.'}
                          </p>
                          <p className="mb-2">추가 비용: {parking.addRates}</p>
                          <p className="mb-2">
                            추가 시간 비용: {parking.addTimeRates}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {chargerStations.map((charger) => (
                <div key={`charger-${charger.id}`} className="m-2">
                  <button
                    className="flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:bg-green-100"
                    onClick={() => handleAccordion(`charger-${charger.id}`)}
                  >
                    <h2 className="text-lg font-semibold">{charger.name}</h2>
                    <span className="font-semibold text-green-600">충전소</span>
                  </button>

                  <div
                    className={`mt-2 overflow-hidden rounded-lg bg-white shadow-md ${
                      expandedItems[`charger-${charger.id}`]
                        ? 'max-h-96 animate-expand'
                        : 'max-h-0 animate-collapse'
                    }`}
                  >
                    <div className="flex p-4">
                      <div className="w-1/2 text-left">
                        <p className="mb-2 font-semibold">
                          <span className="text-gray-600">주소: </span>
                          <span className="text-gray-800">
                            {charger.address}
                          </span>
                        </p>
                        <p className="mb-2 font-semibold">
                          <span className="text-gray-600">사용 시간: </span>
                          <span className="text-gray-800">
                            {charger.useTime}
                          </span>
                        </p>
                        <p className="mb-2 font-semibold">
                          <span className="text-gray-600">주차 요금: </span>
                          <span
                            className={`${
                              charger.parkPay === 'Y'
                                ? 'text-red-600'
                                : 'text-green-600'
                            }`}
                          >
                            {charger.parkPay === 'Y'
                              ? '유료입니다.'
                              : '무료입니다.'}
                          </span>
                        </p>
                        <p className="mb-2 font-semibold">
                          <span className="text-gray-600">제한 여부: </span>
                          <span className="text-gray-800">
                            {charger.limitYn ? '있음' : '없음'}
                          </span>
                        </p>
                        <p className="mb-2 font-semibold">
                          <span className="text-gray-600">제한 상세: </span>
                          <span className="text-gray-800">
                            {charger.limitDetail === ''
                              ? '정보 없음'
                              : charger.limitDetail}
                          </span>
                        </p>
                        <p className="mb-2 font-semibold">
                          <span className="text-gray-600">종류 상세: </span>
                          <span className="text-gray-800">
                            {charger.kindDetail}
                          </span>
                        </p>
                      </div>
                      <div className="h-full w-1/2 overflow-y-auto border-l border-gray-200 pl-4">
                        <ul className="list-inside list-disc">
                          {charger.chargerDetails.map((c) => (
                            <li key={c.id} className="mb-2">
                              <span className="font-semibold text-gray-600">
                                ID:{' '}
                              </span>
                              <span className="text-gray-800">
                                {c.chargerId}
                              </span>
                              ,
                              <span className="font-semibold text-gray-600">
                                {' '}
                                타입:{' '}
                              </span>
                              <span className="text-gray-800">{c.type}</span>,
                              <span className="font-semibold text-gray-600">
                                {' '}
                                상태:{' '}
                              </span>
                              <span className="text-gray-800">{c.status}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </article>
          )}
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
