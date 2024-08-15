const initialState = {
  name: "Hermione Granger",
  status: "Muggle-born",
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        name: action.payload.user_name,
        status: action.payload.user_status,
      };
    default:
      return state;
  }
};
