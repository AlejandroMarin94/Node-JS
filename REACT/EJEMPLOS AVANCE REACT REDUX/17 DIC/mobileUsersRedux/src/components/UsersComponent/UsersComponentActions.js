export const LOAD_USERS = 'LOAD_USERS';
export const SELECT_USER = 'SELECT_USER';

export const loadUsersAction = (usersData) => {
  return {
    type: LOAD_USERS,
    payload: {
      usersData,
    },
  };
};

export const selectUserAction = (userData) => {
  return {
    type: SELECT_USER,
    payload: {
      userData,
    },
  };
};
