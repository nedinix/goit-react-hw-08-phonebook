export const selectIsLoggedIn = state => state.auth.IsLoggedIn;

export const selectUser = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isRefreshing;
