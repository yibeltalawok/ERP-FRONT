import { createSlice } from '@reduxjs/toolkit'
import { registerUser} from '../action_page/userAction';
        //  retriveUser,updateUser,
        //  deleteUser,searchUser} from '../action_page/userAction';
const initialState = {
  loading: false,
  user: {},
  error: false,
  success: false,
  message: null,
  isLogin: false,
 }
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(registerUser.pending, 
          (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(registerUser.fulfilled, 
          (state, { payload }) => {
            state.loading = false
            state.success = true
            state.error = false
            state.isLogin = true
            state.user = payload
            console.log("Registered Payload=",payload)
            })
        builder.addCase(registerUser.rejected, 
          (state, { payload }) => {
            state.loading = false 
            state.error = true 
            state.message = payload
            state.success = false
            state.isLogin = false
            console.log("Error=",payload)
          })
  // extraReducers: (builder) => {
  //     builder.addCase(registerUser.fulfilled,             
  //       (state, { payload }) => {
  //         state.resp = payload
  //         console.log("payload",payload)
  //     })


  // //User Register
// [registerUser.pending]: (state) => {
//   state.loading = true
//   state.error = null
// },
// [registerUser.fulfilled]: (state, { payload }) => {
//   state.loading = false
//   state.success = true
//   state.error = false
//   state.isLogin = true
//   state.user = payload
// },
// [registerUser.rejected]: (state, { payload }) => {
//   state.loading = false 
//   state.error = true 
//   state.message = payload.message
//   state.success = false
//   state.isLogin = false
//   },
//   // List All user
//   [retriveUser.pending]: (state) => {
//     state.loading = true
//     state.error = null
//   },
//   [retriveUser.fulfilled]: (state, { payload }) => {
//     state.loading = false
//     state.success = true
//     state.error = false
//     state.isLogin = true
//     state.user = payload
//   },
//   [retriveUser.rejected]: (state, { payload }) => {
//     state.loading = false 
//     state.error = true 
//     state.message = payload.message
//     state.success = false
//     state.isLogin = false
//     },
//   // Fetch one user
//     [searchUser.pending]: (state) => {
//       state.loading = true
//       state.error = null
//     },
//     [searchUser.fulfilled]: (state, { payload }) => {
//       state.loading = false
//       state.success = true
//       state.error = false
//       state.isLogin = true
//       state.user = payload
//     },
//     [searchUser.rejected]: (state, { payload }) => {
//       state.loading = false 
//       state.error = true 
//       state.message = payload.message
//       state.success = false
//       state.isLogin = false
//       },
//       //  Update User
//     [updateUser.pending]: (state) => {
//       state.loading = true
//       state.error = null
//     },
//     [updateUser.fulfilled]: (state, { payload }) => {
//       state.loading = false
//       state.success = true
//       state.error = false
//       state.isLogin = true
//       state.user = payload
//     },
//     [updateUser.rejected]: (state, { payload }) => {
//       state.loading = false 
//       state.error = true 
//       state.message = payload.message
//       state.success = false
//       state.isLogin = false
//       },
//       // Delete user
//       [deleteUser.pending]: (state) => {
//         state.loading = true
//         state.error = null
//       },
//       [deleteUser.fulfilled]: (state, { payload }) => {
//         state.loading = false
//         state.success = true
//         state.error = false
//         state.isLogin = true
//         state.user = payload
//       },
//       [deleteUser.rejected]: (state, { payload }) => {
//         state.loading = false 
//         state.error = true 
//         state.message = payload.message
//         state.success = false
//         state.isLogin = false
//         },
// // login user reducers
//     [loginUser.pending]: (state) => {
//       state.loading = true
//       state.error = null
//     },
//     [loginUser.fulfilled]: (state, { payload }) => {
//       state.loading = false
//       state.success = true
//       state.error = false
//       state.isLogin = true
//       state.user = payload
//     },
//     [loginUser.rejected]: (state, { payload }) => {
//       state.loading = false 
//       state.error = true 
//       state.message = payload.message
//       state.success = false
//       state.isLogin = false
//     }
  },
})
export default userSlice.reducer