const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsRegister = state => state.auth.isRegister;

const getUserEmail = state => state.auth.user.email;
const getUserConfirm = state => state.auth.user.verify;
const getUserToken = state => state.auth.user.token;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const getErrorRegister = state => state.auth.isRegisterError;

const getErrorLogin = state => state.auth.isLoginError;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getUserConfirm,
  getUserToken,
  getIsFetchingCurrent,
  getErrorRegister,
  getErrorLogin,
  getIsRegister,
};
export default authSelectors;
