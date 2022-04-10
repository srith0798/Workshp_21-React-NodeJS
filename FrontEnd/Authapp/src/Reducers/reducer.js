import * as actions from "../Actions/actionType";

const userReducer = function (state = { data: "" }, action) {
  switch (action.type) {
    case actions.ON_LOG:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};

export default userReducer;
