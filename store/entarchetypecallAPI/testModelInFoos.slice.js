import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_testmodelinfoo_list = createAsyncThunk(
  "testModelInFoos/api_v1_testmodelinfoo_list",
  async payload => {
    const response = await apiService.api_v1_testmodelinfoo_list(payload)
    return response.data
  }
)
export const api_v1_testmodelinfoo_create = createAsyncThunk(
  "testModelInFoos/api_v1_testmodelinfoo_create",
  async payload => {
    const response = await apiService.api_v1_testmodelinfoo_create(payload)
    return response.data
  }
)
export const api_v1_testmodelinfoo_retrieve = createAsyncThunk(
  "testModelInFoos/api_v1_testmodelinfoo_retrieve",
  async payload => {
    const response = await apiService.api_v1_testmodelinfoo_retrieve(payload)
    return response.data
  }
)
export const api_v1_testmodelinfoo_update = createAsyncThunk(
  "testModelInFoos/api_v1_testmodelinfoo_update",
  async payload => {
    const response = await apiService.api_v1_testmodelinfoo_update(payload)
    return response.data
  }
)
export const api_v1_testmodelinfoo_partial_update = createAsyncThunk(
  "testModelInFoos/api_v1_testmodelinfoo_partial_update",
  async payload => {
    const response = await apiService.api_v1_testmodelinfoo_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_testmodelinfoo_destroy = createAsyncThunk(
  "testModelInFoos/api_v1_testmodelinfoo_destroy",
  async payload => {
    const response = await apiService.api_v1_testmodelinfoo_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const testModelInFoosSlice = createSlice({
  name: "testModelInFoos",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_testmodelinfoo_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testmodelinfoo_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinfoo_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinfoo_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testmodelinfoo_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinfoo_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinfoo_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testmodelinfoo_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinfoo_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinfoo_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testmodelinfoo_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinfoo_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinfoo_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testmodelinfoo_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinfoo_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinfoo_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_testmodelinfoo_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_testmodelinfoo_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_testmodelinfoo_list,
  api_v1_testmodelinfoo_create,
  api_v1_testmodelinfoo_retrieve,
  api_v1_testmodelinfoo_update,
  api_v1_testmodelinfoo_partial_update,
  api_v1_testmodelinfoo_destroy,
  slice: testModelInFoosSlice
}
