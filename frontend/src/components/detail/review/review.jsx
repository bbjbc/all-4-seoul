import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import propTypes from 'prop-types';
import reviewImg from '../../../assets/detail-background/review.jpg';
import SubmitButton from '../../button/submit-button';
import { virtualButtons, dummyReviews } from '../dummy-data';
import { FaUserCircle } from 'react-icons/fa';

function Review({ reviewRef }) {
  const { register, handleSubmit, reset } = useForm();
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [reviews, setReviews] = useState(dummyReviews);
  const [submitButtonText, setSubmitButtonText] = useState(
    '적어도 한 가지 항목을 선택해주세요.',
  );
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    if (selectedButtons.length) {
      setSubmitButtonDisabled(false);
      setSubmitButtonText('리뷰 작성');
    } else {
      setSubmitButtonDisabled(true);
      setSubmitButtonText('적어도 한 가지 항목을 선택해주세요.');
    }
  }, [selectedButtons]);

  const onSubmit = (data) => {
    if (!selectedButtons.length) {
      return;
    }

    data.selectedButtons = selectedButtons;
    data.date = new Date().toLocaleString();
    console.log(data);
    setSelectedButtons([]);
    setReviews([
      ...reviews,
      {
        id: reviews.length + 1,
        author: 'User' + (reviews.length + 1),
        content: data.reviewText,
        selectedButtons: data.selectedButtons,
        date: data.date,
      },
    ]);

    reset();
  };

  const handleButtonClick = (label) => {
    if (selectedButtons.includes(label)) {
      setSelectedButtons(
        selectedButtons.filter((buttonLabel) => buttonLabel !== label),
      );
    } else if (selectedButtons.length < 5) {
      setSelectedButtons([...selectedButtons, label]);
    }
  };

  // virtualButtons 배열을 카테고리별로 그룹화
  const buttonsByCategory = virtualButtons.reduce((acc, button) => {
    acc[button.category] = acc[button.category] || [];
    acc[button.category].push(button);
    return acc;
  }, {});

  return (
    <main className="relative h-full w-full" ref={reviewRef}>
      <section className="flex h-full items-center justify-center">
        <img
          src={reviewImg}
          alt="Review"
          className="absolute z-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <article className="z-10 mt-10 flex h-auto w-4/6 rounded-lg bg-white p-6 shadow-lg">
          <div className="max-h-[600px] w-4/6 overflow-y-auto p-3">
            <h1 className="mb-2 font-gmarketbold text-3xl text-orange-600">
              이 곳이 마음에 든다면,
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                {...register('reviewText')}
                rows={4}
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder={`현재 장소에 대한 리뷰를 작성해주세요!\n(리뷰는 선택사항으로 아래 버튼 리뷰로 대체 가능합니다.)\n버튼 리뷰는 필수입니다!`}
              ></textarea>

              <div className="p-3">
                <h1 className="font-gmarketbold text-xl">
                  어떤 점이 좋았나요? (1~5개를 선택해주세요)
                </h1>
                <div className="mt-2 grid grid-cols-3 gap-4 rounded-lg bg-slate-50 p-3">
                  {Object.keys(buttonsByCategory).map((category) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold">{category}</h3>
                      <div className="mt-2 flex flex-col gap-2">
                        {buttonsByCategory[category].map((button) => (
                          <button
                            key={button.id}
                            type="button"
                            className={`rounded-md px-4 py-2 text-sm transition-all duration-200 ease-in-out hover:bg-sky-200 ${
                              selectedButtons.includes(button.label)
                                ? 'bg-blue-300 shadow-lg'
                                : 'bg-white text-stone-800 shadow-lg'
                            }`}
                            onClick={() => handleButtonClick(button.label)}
                          >
                            {button.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-2">
                <SubmitButton
                  disabled={submitButtonDisabled}
                  text={submitButtonText}
                />
              </div>
            </form>
          </div>

          <aside className="max-h-[600px] w-2/6 overflow-y-auto rounded-md bg-neutral-50 p-3 shadow-lg">
            <h2 className="mb-4 text-left font-gmarketbold text-xl">
              리뷰 목록 ({reviews.length}개)
            </h2>
            {reviews.map((review) => (
              <div
                key={review.id}
                className="mb-3 flex w-full flex-col items-start border-b p-2"
              >
                <div className="mb-1 flex items-center">
                  <FaUserCircle size={30} className="mr-2 text-gray-600" />
                  <strong>{review.author}</strong>
                </div>
                <p className="mb-1 text-left text-sm">{review.content}</p>
                {review.selectedButtons && (
                  <div className="mb-1 flex flex-wrap">
                    {review.selectedButtons.map((buttonLabel, index) => (
                      <span
                        key={index}
                        className="m-1 rounded-md bg-sky-200 px-2 py-1 text-xs"
                      >
                        {buttonLabel}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-xs text-zinc-600">{review.date}</p>
              </div>
            ))}
          </aside>
        </article>
      </section>
    </main>
  );
}

Review.propTypes = {
  reviewRef: propTypes.object.isRequired,
};

export default Review;
