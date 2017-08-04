
const initialState = {
  waiting: false,
  posts: []
}

export default function Posts(state = initialState, {type, waiting, posts}) {
  switch (type) {
    case "SET_POSTS":
      return ({
        ...state,
        posts
      })
      case "LOADING":
        return ({
          ...state,
          waiting
        })
    default:
      return state;
  }
}
