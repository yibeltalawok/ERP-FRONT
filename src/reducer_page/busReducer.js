import { createSlice } from '@reduxjs/toolkit'
import { registerBus,
         retriveBus,updateBus,
         deleteBus,searchBus} from '../action_page/busAction';
    const initialState = {
      bus:{},
      loading: false,
      error: false,
      success: false,
      message: null,
      isLogin: false,
     }
  const busSlice = createSlice({
    name:'bus',
    initialState,
    reducers: {},
    extraReducers: {
//bus Register
[registerBus.pending]: (state) => {
  state.loading = true
  state.error = null
},
[registerBus.fulfilled]: (state, { payload }) => {
  state.loading = false
  state.success = true
  state.error = false
  state.isLogin = true
  state.bus = payload
},
[registerBus.rejected]: (state, { payload }) => {
  state.loading = false 
  state.error = true 
  state.message = payload.message
  state.success = false
  state.isLogin = false
  },
  // List All bus
  [retriveBus.pending]: (state) => {
    state.loading = true
    state.error = null
  },
  [retriveBus.fulfilled]: (state, { payload }) => {
    state.loading = false
    state.success = true
    state.error = false
    state.isLogin = true
    state.bus = payload
  },
  [retriveBus.rejected]: (state, { payload }) => {
    state.loading = false 
    state.error = true 
    state.message = payload.message
    state.success = false
    state.isLogin = false
    },
  // Fetch one bus
    [searchBus.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [searchBus.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.error = false
      state.isLogin = true
      state.bus = payload
    },
    [searchBus.rejected]: (state, { payload }) => {
      state.loading = false 
      state.error = true 
      state.message = payload.message
      state.success = false
      state.isLogin = false
      },
      //  Update bus
    [updateBus.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [updateBus.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.error = false
      state.isLogin = true
      state.bus = payload
    },
    [updateBus.rejected]: (state, { payload }) => {
      state.loading = false 
      state.error = true 
      state.message = payload.message
      state.success = false
      state.isLogin = false
      },
      // Delete bus
      [deleteBus.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [deleteBus.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true
        state.error = false
        state.isLogin = true
        state.bus = payload
      },
      [deleteBus.rejected]: (state, { payload }) => {
        state.loading = false 
        state.error = true 
        state.message = payload.message
        state.success = false
        state.isLogin = false
        },},})
export default busSlice.reducer