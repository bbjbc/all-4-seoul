import React from 'react';

const data = [
  {
    name: '가게이름1',
    category: '카페',
    description: '아늑한 분위기의 카페입니다.',
    reviews: 120,
    averagePrice: '₩10,000',
    imageUrl:
      'https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVEJTk1JTlDJUVDJThCJTlEfGVufDB8fDB8fHww',
  },
  {
    name: '가게이름2',
    category: '식당',
    description: '맛있는 음식을 제공하는 식당입니다.',
    reviews: 200,
    averagePrice: '₩20,000',
    imageUrl:
      'https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVEJTk1JTlDJUVDJThCJTlEfGVufDB8fDB8fHww',
  },
];

function RecommendContents() {
  return (
    <div className="m-4 h-3/4 overflow-y-auto rounded-lg bg-gray-100 p-6">
      <h1 className="mb-6 text-xl font-bold">
        All For Seoul&apos;s PICK!{' '}
        <span className="text-gray-500">({data.length}개)</span>
      </h1>
      <div className="mb-6 flex flex-col gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="mb-4 h-40 w-full rounded-t-lg object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-row items-baseline gap-2">
              <h2 className="mb-2 text-xl font-semibold">{item.name}</h2>
              <p className="mb-2 text-sm text-gray-600">{item.category}</p>
            </div>
            <p className="mb-4 text-gray-800">{item.description}</p>
            <div className="text-sm text-gray-500">
              <p>
                리뷰 개수: {item.reviews} / 평균 가격: {item.averagePrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendContents;
