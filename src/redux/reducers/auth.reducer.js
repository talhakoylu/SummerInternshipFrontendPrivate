import {SET_FETCHING, SET_LANGUAGE, SET_USER} from "../actions/auth.action";

const initialState = {
  fetching: false,
  lang: "tr",
  token: null,
};

export default function authReducer(state = initialState, action) {
  const {payload, type} = action;

  switch (type) {
    case SET_USER:
      return {...state, user: payload};
    case SET_FETCHING:
      return {...state, fetching: payload};
    case SET_LANGUAGE:
      return {...state, lang: payload};

    default:
      return state;
  }
}