import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, state, posts } from "./postsSlice";
import { useCallback } from "react";

export const usePostsSelector = () => {
  const selectorPosts = createSelector(state, (state) => state.posts);
  return useSelector(selectorPosts);
};

export const usePostsStatus = () => {
  const selectorStatus = createSelector(state, (state) => state.status);
  return useSelector(selectorStatus);
};

export const useFetchPost = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
};
