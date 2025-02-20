import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://YOUR_MOCKAPI_URL/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const { data } = await axios.get("/");
  return data;
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact) => {
  const { data } = await axios.post("/", contact);
  return data;
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id) => {
  await axios.delete(`/${id}`);
  return id;
});