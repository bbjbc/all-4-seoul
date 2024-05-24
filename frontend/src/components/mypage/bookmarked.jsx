import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useBookmark } from '../../state/bookmark-context';
import { FaTrashAlt } from 'react-icons/fa';
import { getUserBookmarksInfo } from '../../lib/get-user-bookmarks-info';

function BookmarkedPage() {
  const { removeBookmark } = useBookmark();
  const [bookmarks, setBookmarks] = useState([]);
  const [selectedBookmarks, setSelectedBookmarks] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    const data = await getUserBookmarksInfo();
    if (data) {
      setBookmarks(data);
    }
  };

  const toggleSelectedBookmark = (id) => {
    setSelectedBookmarks((prevSelectedBookmarks) => {
      const isSelected = prevSelectedBookmarks.includes(id);
      if (isSelected) {
        return prevSelectedBookmarks.filter((bookmarkId) => bookmarkId !== id);
      } else {
        return [...prevSelectedBookmarks, id];
      }
    });
  };

  const deleteSelectedBookmarks = () => {
    Swal.fire({
      title: '선택 항목 삭제',
      text: '정말로 선택한 항목을 삭제하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '삭제',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        removeBookmark(selectedBookmarks);
        setSelectedBookmarks([]);
        setIsDeleteMode(false);
        Swal.fire('삭제 완료', '선택한 항목이 삭제되었습니다.', 'success');
      }
    });
  };

  const toggleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };

  return (
    <main className="relative z-10 flex w-full animate-slidein items-center justify-center">
      <div className="my-10 flex h-[500px] w-full flex-wrap justify-center overflow-y-auto rounded-lg bg-white px-2 py-6 shadow-lg">
        <header className="mb-4 flex w-full items-start justify-between px-6">
          <h1 className="text-xl font-extrabold">
            북마크 개수 ({bookmarks.length}개)
          </h1>
          <button
            onClick={toggleDeleteMode}
            className={`${bookmarks.length ? 'hover:text-red-600' : 'text-gray-400'}`}
            disabled={!bookmarks.length}
          >
            <FaTrashAlt size={25} />
          </button>
        </header>

        {!bookmarks.length ? (
          <div className="flex w-full flex-col">
            <p className="animate-bounce text-lg">북마크 목록이 없습니다.</p>
          </div>
        ) : (
          <article className="w-full px-6">
            <div className="grid grid-cols-5 gap-4">
              {bookmarks.map((bookmark) => (
                <div
                  key={bookmark.id}
                  className={`relative rounded-xl bg-white text-center shadow-xl ${
                    selectedBookmarks.includes(bookmark.id)
                      ? 'bg-neutral-400 opacity-70'
                      : ''
                  }`}
                  role="presentation"
                >
                  {isDeleteMode && (
                    <button
                      className="absolute right-2 top-2 rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-600 hover:bg-gray-300"
                      onClick={() => toggleSelectedBookmark(bookmark.id)}
                    >
                      {selectedBookmarks.includes(bookmark.id)
                        ? '선택 해제'
                        : '선택'}
                    </button>
                  )}
                  {bookmark.type === 'placeItem' && (
                    <>
                      <img
                        src={bookmark.images}
                        alt={bookmark.name}
                        className="h-36 w-auto rounded-t-xl object-cover"
                      />
                      <div className="p-2 text-center">
                        <p className="text-sm font-semibold">{bookmark.name}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </article>
        )}

        {selectedBookmarks.length > 0 && isDeleteMode && (
          <button
            onClick={deleteSelectedBookmarks}
            className="fixed bottom-20 right-16 rounded-2xl bg-red-600 p-3 text-white hover:bg-red-700"
          >
            선택 항목 삭제
          </button>
        )}
      </div>
    </main>
  );
}

export default BookmarkedPage;
