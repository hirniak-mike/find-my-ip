import { createSlice } from '@reduxjs/toolkit';

import { getIpDetails } from '../Api/apiService';

const findIpSlice = createSlice({
  name: 'findIpSlice',
  initialState: {
    ipDetails: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.ipDetails = [];
    },
    getIpDetailsSuccess: (state, { payload }) => {
      state.isError = false;
      state.isLoading = false;
      state.ipDetails = Object.entries(payload).map(([key, value]) => ({ key: key, value: value }));
    },
  }
});

export const { setLoading, setError, getIpDetailsSuccess } = findIpSlice.actions;

export const getIpDetailsAction = (ip) => {
  return async dispatch => {
    dispatch(setLoading());
    getIpDetails(ip).then(({ data }) => {
      if (data.error) {
        dispatch(setError());
      } else {
        dispatch(getIpDetailsSuccess(data));
      };
    }).catch(() => {
      dispatch(setError());
    });
  };
};

export default findIpSlice.reducer;