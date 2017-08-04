

const loading = (waiting = true) => ({
  type: "LOADING",
  waiting
});

const URL = "https://tiny-lasagna-server.herokuapp.com/collections/blogger/";

export const getPosts = () => {
    return async dispatch => {
      dispatch(loading());
      const posts = await fetch(URL).then(response => response.json());
      dispatch(setPosts(posts));
      dispatch(loading(false));
    };
}
export const setPosts = (posts) => {
  return ({
    type: "SET_POSTS", posts
  });
}
export function createPost(post) {
  const body = JSON.stringify(post);
  console.log(body);
  return async dispatch => {
    dispatch(loading());
    const newPost = await fetch(URL, {
      method: 'POST',
      body
    }).then(response => response.json());
    console.log(newPost);
    dispatch(loading(false));
  }
}

export default { getPosts, setPosts };
