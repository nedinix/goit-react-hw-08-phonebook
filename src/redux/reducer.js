// import { createReducer } from '@reduxjs/toolkit';
// import {
//   addContact,
//   deleteContact,
//   filteredContacts,
//   setFilter,
// } from './actions';

// const contactsInitialState = [];
// const filterInitialState = '';

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(({ id }) => id !== action.payload);
//   },
//   [filteredContacts]: (state, action) => {
//     return state.filter(({ name }) =>
//       name.toLowerCase().includes(action.payload.toLowerCase())
//     );
//   },
// });

// export const filterReducer =
//   (filterInitialState,
//   {
//     [setFilter]: (state, action) => {
//       console.log(state, action);
//       return { ...state, filter: action.payload };
//     },
//   });
