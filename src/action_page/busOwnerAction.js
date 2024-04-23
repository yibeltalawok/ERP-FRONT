import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AddressBaseUrl from "../utils/BaseUrl";
import { handleError } from "../utils/toast";
export const getAllBusOwner = createAsyncThunk(
  "owner",
  async (thunkAPI) =>{ 
    try {
      // base url
      let baseUrl = `${AddressBaseUrl}/promotionapi/users/all`;
      // response
      let response = await axios.get(baseUrl);
      // condition
      if (response.status === 200) {
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }} 
      catch (e) {
      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }});
    export const registerBusOwner = createAsyncThunk(
      "owner",
      async (userData, thunkAPI) => {
        try {
          let baseUrl = `http://localhost:11278/fileupload-api/user/post`;
          // response
          let response = await axios.post(baseUrl, userData);
          if (response.status === 200) {
            console.log("action==",response.data)
            return response.data;
          } else {
            handleError(response.message);
            return thunkAPI.rejectWithValue(response.data);
          }} 
          catch (e) {
          handleError(e.response.data.message);
          return thunkAPI.rejectWithValue(e.response.data);
        }});
        export const searchBusOwner = createAsyncThunk(
          "owner",
          async (id,thunkAPI) =>{
            try {
              // base url
              let baseUrl = `${AddressBaseUrl}/promotionapi/users/update/${id}`;
              // response
              let response = await axios.findById(baseUrl);
              // condition
              if (response.status === 200) {
                return response.data;
              } else {
                handleError(response.message);
                return thunkAPI.rejectWithValue(response.data);
              }} 
              catch (e) {
              handleError(e.response.data.message);
              return thunkAPI.rejectWithValue(e.response.data);
            }});
          export const updateBusOwner = createAsyncThunk(
           "owner",
            async (userData,thunkAPI) =>{
             try {
              // base url
              let baseUrl = `${AddressBaseUrl}/promotionapi/users/update/${userData.id}`;
              // response
              let response = await axios.put(baseUrl);
              // condition
              if (response.status === 200) {
                return response.data;
              } else {
                handleError(response.message);
                return thunkAPI.rejectWithValue(response.data);
              }} 
              catch (e) {
              handleError(e.response.data.message);
              return thunkAPI.rejectWithValue(e.response.data);
            }});
            export const deleteBusOwner = createAsyncThunk(
              "owner",
              async (id,thunkAPI) =>{
                try {
                  // base url
                  let baseUrl = `${AddressBaseUrl}/promotionapi/users/update/${id}`;
                  // response
                  let response = await axios.delete(baseUrl);
                  // condition
                  if (response.status === 200) {
                    return response.data;
                  } else {
                    handleError(response.message);
                    return thunkAPI.rejectWithValue(response.data);
                  }} 
                  catch (e) {
                  handleError(e.response.data.message);
                  return thunkAPI.rejectWithValue(e.response.data);
                }});
