import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;
export const selectContactStatus = state => state.contacts.status;
export const selectContactError = state => state.contacts.error;
export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    return contacts.filter( contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase()))
})
