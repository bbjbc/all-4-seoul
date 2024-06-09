// 배열을 랜덤하게 섞는 함수
export function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// 랜덤한 리뷰 개수를 생성하는 함수
export function getRandomReviews() {
  return Math.floor(Math.random() * 201);
}

// 랜덤한 평균 가격을 생성하는 함수
export function getRandomPrice() {
  return `₩${(Math.floor(Math.random() * 10) + 6) * 1000}`;
}
