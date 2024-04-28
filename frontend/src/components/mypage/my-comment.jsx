import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { FaUserCircle, FaTrashAlt } from 'react-icons/fa';
import { useReview } from '../../state/review-context';
import Modal from '../modal/modal';
import ModalPortal from '../modal/modal-portal';

function reviewToComment(review) {
  return {
    id: review.id,
    author: review.author,
    content: review.content,
    selectedButtons: review.selectedButtons,
    date: review.date,
    name: review.name,
  };
}

function MyCommentPage() {
  const { reviews, removeReview } = useReview();
  const [comments, setComments] = useState(reviews.map(reviewToComment));
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 댓글 목록이 변경될 때마다 comments 상태 업데이트
  useEffect(() => {
    setComments(reviews.map(reviewToComment));
  }, [reviews]);

  const handleDelete = (id) => {
    setSelectedCommentId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    removeReview(selectedCommentId);
    setIsModalOpen(false);
    setSelectedCommentId(null);
  };

  const modalCloseHandler = () => {
    setIsModalOpen(false);
    setSelectedCommentId(null);
  };

  return (
    <>
      <div className="relative z-10 flex w-full animate-slidein flex-col items-center justify-start">
        <div className="my-10 flex h-[500px] w-full flex-col items-center justify-start overflow-y-auto rounded-xl bg-white py-4 shadow-lg">
          <p className="px-12 text-xl font-extrabold">
            작성한 글 목록 ({comments.length}개)
          </p>
          {comments.length ? (
            <ul className="w-full divide-y divide-gray-200 px-12 py-4">
              {comments.map((comment) => (
                <li
                  key={comment.id}
                  className="flex items-start py-4 text-left"
                >
                  <FaUserCircle className="mr-4 text-3xl" size={30} />
                  <div className="flex flex-1 flex-col">
                    <p className="text-lg font-semibold">
                      <Link
                        to={`/list/${comment.name}`}
                        className="hover:font-gmarketbold hover:text-blue-950"
                      >
                        {comment.name}
                      </Link>
                    </p>
                    <p className="mt-1 text-sm">{comment.content}</p>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {comment.selectedButtons &&
                        comment.selectedButtons.map((button, index) => (
                          <span
                            key={index}
                            className="rounded-md bg-sky-200 px-2 py-1 text-xs"
                          >
                            {button}
                          </span>
                        ))}
                    </div>
                    <p className="mt-1 text-xs text-gray-500">{comment.date}</p>
                  </div>

                  <FaTrashAlt
                    className="ml-auto cursor-pointer text-gray-500"
                    size={24}
                    onClick={() => handleDelete(comment.id)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center">
              <p className="animate-bounce text-lg">
                아직 작성한 글이 없습니다.
              </p>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <ModalPortal>
          <Modal onClose={modalCloseHandler} height="auto">
            <div className="rounded-lg bg-white p-4">
              <p>정말 삭제하시겠습니까?</p>
              <div className="mt-4 flex justify-center gap-4">
                <button
                  className="rounded-lg bg-red-500 px-4 py-2 text-white transition-all duration-200 ease-in-out hover:bg-red-700"
                  onClick={handleConfirmDelete}
                >
                  예
                </button>
                <button
                  className="rounded-lg bg-gray-200 px-4 py-2 transition-all duration-200 ease-in-out hover:bg-gray-300"
                  onClick={modalCloseHandler}
                >
                  아니오
                </button>
              </div>
            </div>
          </Modal>
        </ModalPortal>
      )}
    </>
  );
}

export default MyCommentPage;
