const selectIsLoggedIn = (state = state.auth.IsLoggedIn);

const selectUsername = (state = state.auth.user.name);

const authSelectors = {
  selectIsLoggedIn,
  selectUsername,
};

export default authSelectors;
