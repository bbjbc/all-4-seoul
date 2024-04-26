import React from 'react';
import { useBookmark } from '../../state/bookmark-context';

function BookmarkedPage() {
  const { bookmarks } = useBookmark();

  return (
    <div className="flex items-center justify-center">
      <div className="relative z-10 flex w-full flex-col items-start justify-center">
        <div className="my-10 flex h-[500px] w-full flex-wrap justify-center gap-4 overflow-y-auto rounded-lg bg-white px-2 py-6 shadow-lg">
          <p className="text-xl font-extrabold">
            북마크 개수 ({bookmarks.length}개)
          </p>
          {bookmarks.length === 0 ? (
            <div className="flex w-full flex-col">
              <p className="animate-bounce text-lg">북마크 목록이 없습니다.</p>
            </div>
          ) : (
            <div className="w-full px-12">
              <div className="grid grid-cols-5 gap-4">
                {bookmarks.map((bookmark) => (
                  <article
                    key={bookmark.id}
                    className="rounded-xl bg-white text-center shadow-xl"
                  >
                    <img
                      src={bookmark.images}
                      alt={bookmark.name}
                      className="h-36 w-auto rounded-t-xl object-cover"
                    />
                    <div className="p-2 text-center">
                      <h3 className="text-sm font-semibold">{bookmark.name}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookmarkedPage;
