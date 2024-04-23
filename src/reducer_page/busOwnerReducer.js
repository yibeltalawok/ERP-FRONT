import { createSlice } from '@reduxjs/toolkit'
import { registerBusOwner,getAllBusOwner,
         updateBusOwner,deleteBusOwner,searchBusOwner} from '../action_page/userAction';
const initialState = {
  loading: false,
  owner: {},
  error: false,
  success: false,
  message: null,
  isLogin: false,
 }
const busOwnerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
          //Register bus-owner
        builder.addCase(registerBusOwner.pending, 
          (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(registerBusOwner.fulfilled, 
          (state, { payload }) => {
            state.loading = false
            state.success = true
            state.error = false
            state.isLogin = true
            state.owner = payload
            // console.log("Registered bus-owner=",payload)
            })
          builder.addCase(registerBusOwner.rejected, 
            (state, { payload }) => {
            state.loading = false 
            state.error = true 
            state.message = payload
            state.success = false
            state.isLogin = false
            console.log("Error=",payload)
          })
          //bus-owner lis reducer
          builder.addCase(getAllBusOwner.pending, 
              (state) => {
                state.loading = true
                state.error = null
            })
            builder.addCase(getAllBusOwner.fulfilled, 
              (state, { payload }) => {
                state.loading = false
                state.success = true
                state.error = false
                state.isLogin = true
                state.owner = payload
                // console.log("list of bus-owner=",payload)
                })
            builder.addCase(getAllBusOwner.rejected, 
              (state, { payload }) => {
                state.loading = false 
                state.error = true 
                state.message = payload
                state.success = false
                state.isLogin = false
                // console.log("Error=",payload)
              })    
            //bus-owner search reducer
            builder.addCase(searchBusOwner.pending, 
                (state) => {
                    state.loading = true
                    state.error = null
                })
                builder.addCase(searchBusOwner.fulfilled, 
                (state, { payload }) => {
                    state.loading = false
                    state.success = true
                    state.error = false
                    state.isLogin = true
                    state.owner = payload
                //   console.log("updated bus-owner=",payload)
                    })
                builder.addCase(searchBusOwner.rejected, 
                (state, { payload }) => {
                    state.loading = false 
                    state.error = true 
                    state.message = payload
                    state.success = false
                    state.isLogin = false
                //   console.log("Error=",payload)
                })
              //bus-owner update reducer
              builder.addCase(updateBusOwner.pending, 
                (state) => {
                  state.loading = true
                  state.error = null
              })
              builder.addCase(updateBusOwner.fulfilled, 
                (state, { payload }) => {
                  state.loading = false
                  state.success = true
                  state.error = false
                  state.isLogin = true
                  state.owner = payload
                //   console.log("updated bus-owner=",payload)
                  })
              builder.addCase(updateBusOwner.rejected, 
                (state, { payload }) => {
                  state.loading = false 
                  state.error = true 
                  state.message = payload
                  state.success = false
                  state.isLogin = false
                //   console.log("Error=",payload)
              })
              //bus-owner delete reducer
              builder.addCase(deleteBusOwner.pending, 
                (state) => {
                  state.loading = true
                  state.error = null
              })
              builder.addCase(deleteBusOwner.fulfilled, 
                (state, { payload }) => {
                  state.loading = false
                  state.success = true
                  state.error = false
                  state.isLogin = true
                  state.owner = payload
                //   console.log("updated bus-owner=",payload)
                  })
              builder.addCase(deleteBusOwner.rejected, 
                (state, { payload }) => {
                  state.loading = false 
                  state.error = true 
                  state.message = payload
                  state.success = false
                  state.isLogin = false
                //   console.log("Error=",payload)
              })      
        },})
export default busOwnerSlice.reducer