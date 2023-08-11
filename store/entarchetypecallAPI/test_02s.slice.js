import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_test_02_list = createAsyncThunk("test_02s/api_v1_test_02_list", async payload => {
  const response = await apiService.api_v1_test_02_list(payload);
  return response.data;
});
export const api_v1_test_02_create = createAsyncThunk("test_02s/api_v1_test_02_create", async payload => {
  const response = await apiService.api_v1_test_02_create(payload);
  return response.data;
});
export const api_v1_test_02_retrieve = createAsyncThunk("test_02s/api_v1_test_02_retrieve", async payload => {
  const response = await apiService.api_v1_test_02_retrieve(payload);
  return response.data;
});
export const api_v1_test_02_update = createAsyncThunk("test_02s/api_v1_test_02_update", async payload => {
  const response = await apiService.api_v1_test_02_update(payload);
  return response.data;
});
export const api_v1_test_02_partial_update = createAsyncThunk("test_02s/api_v1_test_02_partial_update", async payload => {
  const response = await apiService.api_v1_test_02_partial_update(payload);
  return response.data;
});
export const api_v1_test_02_destroy = createAsyncThunk("test_02s/api_v1_test_02_destroy", async payload => {
  const response = await apiService.api_v1_test_02_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const test_02sSlice = createSlice({
  name: "test_02s",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_test_02_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_test_02_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [api_v1_test_02_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_test_02_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_test_02_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [api_v1_test_02_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_test_02_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_test_02_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [api_v1_test_02_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_test_02_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_test_02_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_test_02_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_test_02_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_test_02_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_test_02_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_test_02_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_test_02_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    },
    [api_v1_test_02_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  api_v1_test_02_list,
  api_v1_test_02_create,
  api_v1_test_02_retrieve,
  api_v1_test_02_update,
  api_v1_test_02_partial_update,
  api_v1_test_02_destroy,
  slice: test_02sSlice
};