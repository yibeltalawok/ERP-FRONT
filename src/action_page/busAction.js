import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AddressBaseUrl from "../utils/BaseUrl";
import { handleError } from "../utils/toast";

export const retriveBus = createAsyncThunk(
  "user",
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
    export const registerBus = createAsyncThunk(
      "user",
      async (busData, thunkAPI) => {
        try {
           const Data = { busName:busData.busName, level:busData.level, Bustype:busData.Bustype, Tnumber:busData.Tnumber, seatNo:busData.seatNo };
           localStorage.setItem("busInfo", JSON.stringify(Data))
           let baseUrl = `http://localhost:19121/bus-reservation-system-api/users/create`;
          // response
          let response = await axios.post(baseUrl, busData);
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
        export const searchBus = createAsyncThunk(
          "user",
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
          export const updateBus = createAsyncThunk(
           "user",
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
            export const deleteBus = createAsyncThunk(
              "user",
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
