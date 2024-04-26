import React from 'react';
import { useBookmark } from '../../state/bookmark-context';

function Bookmarked() {
  const { bookmarks } = useBookmark();

  return (
    <div className="flex items-center justify-center">
      <div className="relative z-10 flex w-2/3 flex-col items-start justify-center">
        <p className="my-5 text-xl font-extrabold">
          북마크 개수({bookmarks.length})
        </p>
        <div className="flex h-[500px] w-full flex-wrap justify-center gap-4 overflow-y-auto rounded-lg bg-white px-2 py-6 shadow-lg">
          {bookmarks.length === 0 ? (
            <div className="flex w-full flex-1 flex-col items-center justify-center">
              <p className="animate-bounce text-lg">북마크 목록이 없습니다.</p>
            </div>
          ) : (
            bookmarks.map((bookmark) => (
              <article key={bookmark.id} className="max-w-xs">
                <div className="rounded-xl bg-white text-center shadow-xl">
                  <img
                    src={bookmark.images}
                    alt={bookmark.name}
                    className="h-44 w-44 rounded-t-xl object-cover"
                  />
                  <div className="p-2 text-center">
                    <h3 className="text-sm font-semibold">{bookmark.name}</h3>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookmarked;
