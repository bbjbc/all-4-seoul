import React from 'react';

import { ResponsivePie } from '@nivo/pie';

import propTypes from 'prop-types';

function PiePopulationGraph({ data }) {
  return (
    <div className="h-80 w-80">
      <ResponsivePie
        data={data}
        margin={{ top: 30, right: 60, bottom: 100, left: 60 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: '유아',
            },
            id: 'dots',
          },
          {
            match: {
              id: '10대',
            },
            id: 'dots',
          },
          {
            match: {
              id: '20대',
            },
            id: 'dots',
          },
          {
            match: {
              id: '30대',
            },
            id: 'dots',
          },
          {
            match: {
              id: '40대',
            },
            id: 'lines',
          },
          {
            match: {
              id: '50대',
            },
            id: 'lines',
          },
          {
            match: {
              id: '60대',
            },
            id: 'lines',
          },
          {
            match: {
              id: '70대',
            },
            id: 'lines',
          },
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 40,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'top-to-bottom',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

PiePopulationGraph.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      label: propTypes.string,
      value: propTypes.number,
      color: propTypes.string,
    }),
  ).isRequired,
};

export default PiePopulationGraph;
