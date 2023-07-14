import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from 'api-service/mockapi';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       return [...state, action.payload];
  //     },
  //     prepare({ name, number }) {
  //       return {
  //         payload: {
  //           name,
  //           number,
  //           id: nanoid(),
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     return state.filter(({ id }) => id !== action.payload);
  //   },
  //   filteredContacts(state, action) {
  //     return state.filter(({ name }) =>
  //       name.toLowerCase().includes(action.payload.toLowerCase())
  //     );
  //   },
  // },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        // state.items.id = nanoid();
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
});

// export const { addContact, deleteContact, filteredContacts } =
//   contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
