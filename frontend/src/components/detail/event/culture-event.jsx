import React, { useState } from 'react';

import propTypes from 'prop-types';

import cultureImage from '../../../assets/detail-background/culture.jpg';
import EventInfo from './event-info';

function CultureEvent({ cultureRef, name, data = [] }) {
  const [expandedItems, setExpandedItems] = useState({});

  const handleAccordion = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main ref={cultureRef} className="relative h-full">
      <section className="flex h-full items-center justify-center">
        <img
          src={cultureImage}
          alt="CultureEvent"
          className="absolute z-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <article className="z-10 mt-10 h-4/5 w-3/6 rounded-lg bg-white p-6 shadow-lg">
          <header className="mb-2 flex items-start justify-center gap-4 text-3xl">
            <h1 className="font-gmarketbold text-orange-600">{name}</h1>
            <span className="font-semibold">문화 행사 정보</span>
          </header>
          <p className="mb-2 text-lg">
            {new Date().toLocaleDateString()} 기준으로 {data.length}
            건의 문화 행사 정보가 있습니다.
          </p>

          <div className="h-5/6 overflow-y-auto rounded-lg bg-zinc-100 p-2">
            {data.length > 0 ? (
              data.map((culture, index) => (
                <div key={index} className="m-2">
                  <button
                    className="flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md transition-all duration-300"
                    onClick={() => handleAccordion(index)}
                  >
                    <h2 className="text-lg font-semibold">{culture.name}</h2>
                    <span className="font-semibold text-blue-600">
                      자세히 보기
                    </span>
                  </button>

                  <div
                    className={`mt-2 overflow-hidden rounded-lg bg-white shadow-md ${
                      expandedItems[index]
                        ? 'max-h-96 animate-expand'
                        : 'max-h-0 animate-collapse'
                    }`}
                  >
                    <div className="grid w-full grid-cols-2 gap-4 p-2">
                      <img
                        src={culture.thumbnail}
                        alt={culture.name}
                        className="h-80 w-full rounded-lg shadow-md"
                      />

                      <div className="max-h-[350px] w-full overflow-y-auto p-2 text-left">
                        <p className="text-md font-semibold">{culture.name}</p>
                        <p className="text-xs text-gray-500">
                          {culture.period}
                        </p>

                        <EventInfo titleName="장소" culture={culture.place} />
                        <EventInfo
                          titleName="세부사항"
                          culture={culture.etcDetail}
                        />
                        <EventInfo
                          titleName="이용요금"
                          culture={culture.payYn}
                        />
                        <EventInfo titleName="링크" culture={culture.url} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="m-2 flex h-full w-full items-center justify-center">
                <p className="animate-bounce text-center text-xl font-semibold">
                  주변 행사 정보가 없습니다.
                </p>
              </div>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}

CultureEvent.propTypes = {
  cultureRef: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  data: propTypes.array.isRequired,
};

export default CultureEvent;
