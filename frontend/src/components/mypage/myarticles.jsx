import React, { useState } from 'react';
import { FaUserCircle, FaTrashAlt } from 'react-icons/fa';

import Modal from '../modal/modal';
import ModalPortal from '../modal/modal-portal';
import { dummyArticles } from './dummy-data';

function MyArticles() {
  const [articles, setArticles] = useState(dummyArticles);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    setSelectedArticleId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    const updatedArticles = articles.filter(
      (article) => article.id !== selectedArticleId,
    );
    setArticles(updatedArticles);
    setIsModalOpen(false);
    setSelectedArticleId(null);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setSelectedArticleId(null);
  };

  return (
    <>
      <div className="relative z-10 flex w-full flex-col items-center justify-start">
        <div className="my-10 flex h-[500px] w-full flex-col items-center justify-start overflow-y-auto rounded-xl bg-white py-4 shadow-lg">
          <p className="px-12 text-xl font-extrabold">
            작성한 글 목록({articles.length})
          </p>
          {articles.length ? (
            <ul className="w-full divide-y divide-gray-200 px-12 py-4">
              {articles.map((article) => (
                <li
                  key={article.id}
                  className="flex items-center py-4 text-left"
                >
                  <FaUserCircle className="mr-4 text-3xl" size={30} />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{article.place}</p>
                    <p className="mt-1 text-sm">{article.content}</p>
                    <p className="mt-1 text-xs text-gray-500">{article.date}</p>
                  </div>

                  <FaTrashAlt
                    className="ml-auto cursor-pointer text-gray-500"
                    size={24}
                    onClick={() => handleDelete(article.id)}
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
          <Modal onClose={handleCancelDelete} height="auto">
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
                  onClick={handleCancelDelete}
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

export default MyArticles;
