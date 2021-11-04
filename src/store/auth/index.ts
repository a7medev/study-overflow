import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from '../../types/User';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    ready: false,
    user: null as User | null,
  },
  reducers: {
    updateUser: (state, action: PayloadAction<User | null>) => {
      state.ready = true;
      state.user = action.payload;
    },
  },
});

export const { updateUser } = authSlice.actions;

export default authSlice.reducer;
