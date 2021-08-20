export const SET_USER = 'SET_USER';
export const SET_FETCHING = 'SET_FETCHING';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setUser = payload => {
  return {
    type: SET_USER,
    payload
  };
};

export const setFetching = payload => {
  return {
    type: SET_FETCHING,
    payload
  };
};

export const setLanguage = payload => {
  return {
    type: SET_LANGUAGE,
    payload
  }
}
