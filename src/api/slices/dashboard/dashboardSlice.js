import { setErrors } from "../../../utils/utility";
import apiServices from "../../../services/requestHandler";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: null,
  links: null,
  loading: {
    results: true,
    links: true,
  },
  error: null,
};

export const readDashboardResults = createAsyncThunk(
  "dashboard/results",
  async (args, thunkApi) => {
    const { data, setError } = args;

    try {
      const response = await apiServices.viewResults(data);
      return response?.data;
    } catch (e) {
      const errorMessage = e?.response?.data?.message || "Network Error";
      thunkApi.dispatch(setErrorMessage(errorMessage));
      setErrors(setError, e?.response?.data || {});

      return thunkApi.rejectWithValue({
        message: errorMessage,
        status: e?.response?.status || 500,
      });
    }
  }
);

export const readDashboardLinks = createAsyncThunk(
  "dashboard/links",
  async (args, thunkApi) => {
    try {
      const response = await apiServices.viewLinks();

      return response?.data;
    } catch (e) {
      const errorMessage = e?.response?.data?.message || "Network Error";
      thunkApi.dispatch(setErrorMessage(errorMessage));

      return thunkApi.rejectWithValue({
        message: errorMessage,
        status: e?.response?.status || 500,
      });
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readDashboardResults.pending, (state) => {
      state.loading.results = true;
      state.error = null;
    });
    builder.addCase(readDashboardResults.fulfilled, (state, action) => {
      state.loading.results = false;
      if (action?.payload) state.results = action.payload?.data;
    });
    builder.addCase(readDashboardResults.rejected, (state) => {
      state.loading.results = false;
      state.error = action.payload?.message || "Failed to fetch data";
    });
    builder.addCase(readDashboardLinks.pending, (state) => {
      state.loading.links = true;
      state.error = null;
    });
    builder.addCase(readDashboardLinks.fulfilled, (state, action) => {
      state.loading.links = false;
      if (action?.payload) state.links = action.payload;
    });
    builder.addCase(readDashboardLinks.rejected, (state, action) => {
      state.loading.links = false;
      state.error = action.payload?.message || "Failed to fetch data";
    });
  },
});

export default dashboardSlice.reducer;
export const { setErrorMessage } = dashboardSlice.actions;
