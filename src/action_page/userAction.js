import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AddressBaseUrl from "../utils/BaseUrl";
import { handleError } from "../utils/toast";
// export const retriveUser = createAsyncThunk(
//   "user",
//   async (thunkAPI) =>{
//     try {
//       // base url
//       let baseUrl = `${AddressBaseUrl}/promotionapi/users/all`;
//       // response
//       let response = await axios.get(baseUrl);
//       // condition
//       if (response.status === 200) {
//         return response.data;
//       } else {
//         handleError(response.message);
//         return thunkAPI.rejectWithValue(response.data);
//       }} 
//       catch (e) {
//       handleError(e.response.data.message);
//       return thunkAPI.rejectWithValue(e.response.data);
//     }});
    export const registerUser = createAsyncThunk(
      "user",
      async (userData, thunkAPI) => {
        try {
          // const Dat00a = { firstName:userData.firstName, middleName:userData.middleName, sex:userData.sex, email:userData.email, password:userData.password };
          // let baseUrl = `${AddressBaseUrl}/bus-reservation-system-api/users/create`;
          let baseUrl = `http://localhost:11278/fileupload-api/user/post`;
          // response
          let response = await axios.post(baseUrl, userData);
          // condition
          if (response.status === 200) {
            console.log("action==",response.data)

            // handleSuccess(response.data.message);
            // const userInfo = { id: response.data.id, token: response.data.token };
            // localStorage.setItem("userInfo", JSON.stringify(userInfo));
            return response.data;
          } else {
            handleError(response.message);
            return thunkAPI.rejectWithValue(response.data);
          }} 
          catch (e) {
          handleError(e.response.data.message);
          return thunkAPI.rejectWithValue(e.response.data);
        }});
        // export const searchUser = createAsyncThunk(
        //   "user",
        //   async (id,thunkAPI) =>{
        //     try {
        //       // base url
        //       let baseUrl = `${AddressBaseUrl}/promotionapi/users/update/${id}`;
        //       // response
        //       let response = await axios.findById(baseUrl);
        //       // condition
        //       if (response.status === 200) {
        //         return response.data;
        //       } else {
        //         handleError(response.message);
        //         return thunkAPI.rejectWithValue(response.data);
        //       }} 
        //       catch (e) {
        //       handleError(e.response.data.message);
        //       return thunkAPI.rejectWithValue(e.response.data);
        //     }});
          export const updateUser = createAsyncThunk(
           "user",
            async (userData,thunkAPI) =>{
             try {
              // base url
              console.log("id=",userData.id)
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
        //     export const deleteUser = createAsyncThunk(
        //       "user",
        //       async (id,thunkAPI) =>{
        //         try {
        //           // base url
        //           let baseUrl = `${AddressBaseUrl}/promotionapi/users/update/${id}`;
        //           // response
        //           let response = await axios.delete(baseUrl);
        //           // condition
        //           if (response.status === 200) {
        //             return response.data;
        //           } else {
        //             handleError(response.message);
        //             return thunkAPI.rejectWithValue(response.data);
        //           }} 
        //           catch (e) {
        //           handleError(e.response.data.message);
        //           return thunkAPI.rejectWithValue(e.response.data);
        //         }});
        //   export const loginUser = createAsyncThunk(
        //     "user",
        //     async (authData, thunkAPI) => {
        //     try {
        //       // base url
        //       let baseUrl = `${AddressBaseUrl}/promotionapi/users/login`;
        //       // response
        //       let response = await axios.post(baseUrl, authData);
        //       // condition
        //       if (response.status === 200) {
        //       // handleSuccess(response.data.message);
        //       // put the user info into local storage
        //       const userInfo = { id: response.data.id, token: response.data.token };
        //       localStorage.setItem("userInfo", JSON.stringify(userInfo));
        //       return response.data;
              
        //     } else {
        //       handleError(response.message);
        //       return thunkAPI.rejectWithValue(response.data);
        //     }
        //   } catch (e) {
        //     handleError(e.response.data.message);
        //     return thunkAPI.rejectWithValue(e.response.data);
        //   }});