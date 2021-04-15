const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.user.email;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const getErrorRegister = state => state.auth.isRegisterError;

const getErrorLogin = state => state.auth.isLoginError;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrent,
  getErrorRegister,
  getErrorLogin,
};
export default authSelectors;
