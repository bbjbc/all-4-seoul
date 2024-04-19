package com.capstone.all4seoul.bookmark.domain;

import com.capstone.all4seoul.place.domain.Place;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Embeddable;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Embeddable
public class Bookmarks {
    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST, orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<Bookmark> bookmarks = new HashSet<>();

    public static Bookmarks createEmptyBookmarks() {
        return new Bookmarks();
    }

    public void addBookmark(Bookmark bookmark) {
        bookmarks.add(bookmark);
    }

    public void deleteBookmark(Long placeId) {
        Set<Bookmark> deletedBookmarks = bookmarks.stream()
                .filter(bookmark -> !bookmark.getPlace().getId().equals(placeId))
                .collect(Collectors.toSet());
        bookmarks.clear();
        bookmarks.addAll(deletedBookmarks);
    }

    public boolean containsBookmarkOf(Place place) {
        return bookmarks.stream()
                .anyMatch(bookmark -> bookmark.isBookmarkOf(place));
    }

    public boolean isDuplicated(Bookmark inputBookmark) {
        return bookmarks.stream()
                .anyMatch(bookmark -> bookmark.isBookmarkOf(inputBookmark.getPlace()));
    }

    public List<Long> findBookmarkedPlaceIds() {
        return bookmarks.stream()
                .map(Bookmark::getPlaceId)
                .toList();
    }
}
