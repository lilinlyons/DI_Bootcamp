import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { state, books, genre } from "./selectors";

export const useSelectBooks = () => {
  const selectorBooks = createSelector(state, (state) => state.books);
  return useSelector(selectorBooks);
};

export const useSelectFictionBooks = () => {
  return useSelector(
      // create selector caches results so it optimises the rendering for the redux script
      createSelector([books, genre], (books, genre) => {
        return books.filter((book) => book.genre == "Fiction");
      })
  );

};

export const useSelectDystopianBooks = () => {
  return useSelector(
      // create selector caches results so it optimises the rendering for the redux script
      createSelector([books, genre], (books, genre) => {
        return books.filter((book) => book.genre == "Dystopian");
      })
  );

};
