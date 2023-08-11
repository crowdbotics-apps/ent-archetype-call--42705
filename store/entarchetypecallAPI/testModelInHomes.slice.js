import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_testmodelinhome_list = createAsyncThunk(
  "testModelInHomes/api_v1_testmodelinhome_list",
  async payload => {
    const response = await apiService.api_v1_testmodelinhome_list(payload)
    return response.data
  }
)
export const api_v1_testmodelinhome_create = createAsyncThunk(
  "testModelInHomes/api_v1_testmodelinhome_create",
  async payload => {
    const response = await apiService.api_v1_testmodelinhome_create(payload)
    return response.data
  }
)
export const api_v1_testmodelinhome_retrieve = createAsyncThunk(
  "testModelInHomes/api_v1_testmodelinhome_retrieve",
  async payload => {
    const response = await apiService.api_v1_testmodelinhome_retrieve(payload)
    return response.data
  }
)
export const api_v1_testmodelinhome_update = createAsyncThunk(
  "testModelInHomes/api_v1_testmodelinhome_update",
  async payload => {
    const response = await apiService.api_v1_testmodelinhome_update(payload)
    return response.data
  }
)
export const api_v1_testmodelinhome_partial_update = createAsyncThunk(
  "testModelInHomes/api_v1_testmodelinhome_partial_update",
  async payload => {
    const response = await apiService.api_v1_testmodelinhome_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_testmodelinhome_destroy = createAsyncThunk(
  "testModelInHomes/api_v1_testmodelinhome_destroy",
  async payload => {
    const response = await apiService.api_v1_testmodelinhome_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testModelInHomesSlice = createSlice({
  name: "testModelInHomes",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_testmodelinhome_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testmodelinhome_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinhome_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinhome_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testmodelinhome_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinhome_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinhome_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testmodelinhome_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinhome_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinhome_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testmodelinhome_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinhome_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinhome_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testmodelinhome_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinhome_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinhome_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testmodelinhome_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinhome_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_testmodelinhome_list,
  api_v1_testmodelinhome_create,
  api_v1_testmodelinhome_retrieve,
  api_v1_testmodelinhome_update,
  api_v1_testmodelinhome_partial_update,
  api_v1_testmodelinhome_destroy,
  slice: testModelInHomesSlice
}
