import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./manageData/manageDataSlice";
import ReactionButton from "./emojis/emojiSlice";
import Users from "./users/Users";

const PostsList = (props) => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const status = useSelector((state) => state.postsReducer.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (status === "loading") return <h2>Loading...</h2>;

  if (status === "failed")
    return <p>Somthing went wrong, try in few minutes...</p>;

  return (
    <>
      <h2>Posts</h2>
      <Users/>
      <section>
        {posts
          ? posts.map((post) => {
              return (
                <article key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <ReactionButton post={post} />
                </article>
              );
            })
          : null}
      </section>
    </>
  );
};
export default PostsList;
