import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContactById, postContact, requestContacts } from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestContacts();

      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await postContact(contact);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await deleteContactById(id);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
