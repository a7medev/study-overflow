import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = FirebaseAuthTypes.User | null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    ready: false,
    user: null as User,
  },
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.ready = true;
      state.user = action.payload;
    },
  },
});

export const { updateUser } = authSlice.actions;

export default authSlice.reducer;
