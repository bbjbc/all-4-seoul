import React, { useState } from 'react';

import propTypes from 'prop-types';

import cultureImage from '../../../assets/detail-background/culture.jpg';
import EventInfo from './event-info';
import { dummyCultureEvents } from '../dummy-data';

function CultureEvent({ cultureRef, name }) {
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
            {new Date().toLocaleDateString()} 기준으로{' '}
            {dummyCultureEvents.length}
            건의 문화 행사 정보가 있습니다.
          </p>

          <div className="h-5/6 overflow-y-auto rounded-lg bg-zinc-100 p-2">
            {dummyCultureEvents.map((culture) => (
              <div key={culture.id} className="m-2">
                <button
                  className="flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md transition-all duration-300"
                  onClick={() => handleAccordion(culture.id)}
                >
                  <h2 className="text-lg font-semibold">{culture.title}</h2>
                  <span className="font-semibold text-blue-600">
                    자세히 보기
                  </span>
                </button>

                <div
                  className={`mt-2 overflow-hidden rounded-lg bg-white shadow-md ${
                    expandedItems[culture.id]
                      ? 'max-h-96 animate-expand'
                      : 'max-h-0 animate-collapse'
                  }`}
                >
                  <div className="grid w-full grid-cols-2 gap-4 p-2">
                    <img
                      src={culture.image}
                      alt={culture.title}
                      className="h-80 w-full rounded-lg shadow-md"
                    />

                    <div className="max-h-[350px] w-full overflow-y-auto p-2 text-left">
                      <p className="text-md font-semibold">{culture.name}</p>
                      <p className="text-xs text-gray-500">{culture.date}</p>

                      <EventInfo
                        titleName="소개"
                        culture={culture.description}
                      />
                      <EventInfo titleName="장소" culture={culture.location} />
                      <EventInfo titleName="분류" culture={culture.category} />
                      <EventInfo
                        titleName="이용요금"
                        culture={culture.charge}
                      />
                      <EventInfo titleName="기관" culture={culture.agency} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

CultureEvent.propTypes = {
  cultureRef: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
};

export default CultureEvent;
