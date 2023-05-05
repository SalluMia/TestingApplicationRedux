import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  success: null,
  
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    createPostStart(state) {
      state.isLoading = true;
      state.error = null;
      state.success = null;
    },
    createPostSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.success = action.payload;
    },
    createPostFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.success = null;
    },

    fetchDataStart(state) {
        state.isLoading = true;
        state.error = null;
      },
      fetchDataSuccess(state, action) {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      },
      fetchDataFailure(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
  },
});

export const { createPostStart, createPostSuccess, createPostFailure,fetchDataStart, fetchDataSuccess, fetchDataFailure } = productSlice.actions;

export const createPost = (formData) => async (dispatch) => {
  try {
    dispatch(createPostStart());
    const response = await axios.post('http://localhost:9000/Posts', formData);
    dispatch(createPostSuccess(response.data));
    window.alert('Successful insertion');
  } catch (error) {
    dispatch(createPostFailure(error.message));
    window.alert('Unsuccessful insertion');
  }
};

export const fetchData = () => async (dispatch) => {
    try {
      dispatch(fetchDataStart());
      const response = await axios.get('http://localhost:9000/data');
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };

export default productSlice.reducer;