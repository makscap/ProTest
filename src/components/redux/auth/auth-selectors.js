const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const getErrorRegister = state => state.auth.isRegisterError;

const getErrorLogin = state => state.auth.isLoginError;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
  getErrorRegister,
  getErrorLogin,
};
export default authSelectors;
