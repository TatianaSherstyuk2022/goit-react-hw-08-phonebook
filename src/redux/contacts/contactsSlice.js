import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ContactsAPI } from 'services/api';


export const getContactsRequest = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ContactsAPI.getContacts();

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactRequest = createAsyncThunk(
  'contacts/addContact',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await ContactsAPI.addContact(formData);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactRequest = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await ContactsAPI.deleteContact(contactId);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  contacts: [],
  status: 'idle', // 'idle' | 'pending' | 'resolved' | 'rejected'
  error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
    
    .addCase(getContactsRequest.pending, pendingHandler)
      .addCase(getContactsRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.contacts = action.payload;
      })
      .addCase(getContactsRequest.rejected, rejectHandler)
    
    .addCase(addContactRequest.pending, pendingHandler)
      .addCase(addContactRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(addContactRequest.rejected, rejectHandler)

    .addCase(deleteContactRequest.pending, pendingHandler)
      .addCase(deleteContactRequest.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContactRequest.rejected, rejectHandler),

})

function pendingHandler(state) {
  state.error = null;
  state.status = 'pending';
}
function rejectHandler(state, action) {
  state.status = 'rejected';
  state.error = action.payload;
}

export const contactReducer = contactsSlice.reducer;