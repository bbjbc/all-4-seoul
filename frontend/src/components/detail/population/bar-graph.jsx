import React from 'react';

import { ResponsiveBar } from '@nivo/bar';

import propTypes from 'prop-types';

function BarGraph({ data }) {
  const formatPopulation = (value) => {
    if (value >= 10000) {
      return `${(value / 10000).toFixed(1)}만`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}천`;
    } else if (value >= 100) {
      return `${(value / 1000).toFixed(1)}백`;
    } else {
      return value;
    }
  };

  return (
    <div className="h-96 w-full">
      <ResponsiveBar
        data={data}
        keys={['예상 인구수']}
        indexBy="time"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={({ id, data }) => {
          if (data[id] >= 10000) {
            return '#d15f4d';
          } else if (data[id] >= 1000) {
            return '#dbb623';
          } else {
            return '#9aeda1';
          }
        }}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '시간',
          legendPosition: 'middle',
          legendOffset: 40,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '인구 수',
          legendPosition: 'middle',
          legendOffset: -50,
          truncateTickAt: 0,
          format: (value) => formatPopulation(value),
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="시간대별 예상 인구수 바 그래프"
        barAriaLabel={(e) =>
          `${e.indexValue} 시간대 예상 인구수: ${formatPopulation(e.value)}`
        }
      />
    </div>
  );
}

BarGraph.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default BarGraph;
