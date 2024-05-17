import React from 'react';

import s1 from '../../assets/landingpage/서울1.png';
import s2 from '../../assets/landingpage/서울2.png';
import s3 from '../../assets/landingpage/서울3.jpg';
import s4 from '../../assets/landingpage/서울4.jpg';

const sections = [
  {
    image: s1,
    title: (
      <>
        서울의 <br />
        핫플레이스
        <br />
        알려드림
      </>
    ),
    description: (
      <>
        서울의 핫플레이스들의 각종 정보들을 제공합니다 <br />
        여러분들이 방문하고싶거나 알아보고 싶은
        <br />
        서울의 핫플을 직접 찾아볼 수 있습니다
      </>
    ),
  },
  {
    image: s2,
    title: (
      <>
        복잡하지 않을까? <br />
        걱정 NO NO
      </>
    ),
    description: (
      <>
        각 장소들에 대해 실시간으로 <br />
        인구수와 혼잡도 정보를 제공함으로 <br />
        사용자 여러분들에게 편의를 만족시킵니다
      </>
    ),
  },
  {
    image: s3,
    title: (
      <>
        주차장 주유소
        <br />
        어쩌지? <br />
        알려드림
      </>
    ),
    description: (
      <>
        문화시설 및 관광명소들과 주변 주차장과 <br />
        주유소가 어디있는지 알려드립니다 <br />
        서울 어디든 가고 싶은 곳을 편하게 찾으세요
      </>
    ),
  },
  {
    image: s4,
    title: (
      <>
        날씨까지?
        <br />
        알려드림
      </>
    ),
    description: (
      <>
        각종 장소들의 날씨도 알려드립니다 <br />
        편하게 정보들을 찾아보세요
      </>
    ),
  },
];

export default sections;
