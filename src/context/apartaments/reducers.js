export const reducersApartaments = (state, action) => {
  switch (action.type) {
    case '@@FETCH':
      return {
        ...state,
        apartaments: action.payload.array,
        apartamentsMap: action.payload.json,
      };
    case '@@ADD': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case '@@FILTER':
      return {
        ...state,
        apartamentsMap: action.payload,
      };
    case '@@REMOVE':
      return {
        ...state,
        apartamentsMap: action.payload.aparments,
        apartamentsLike: action.payload.likes,
      };
    case '@@LIKE':
      return {
        ...state,
        apartamentsLike: action.payload,
      };
    default:
      return state;
  }
};
