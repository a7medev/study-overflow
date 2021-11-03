import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createSlice } from '@reduxjs/toolkit';

type User = FirebaseAuthTypes.User | null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    ready: false,
    user: null as User,
  },
  reducers: {
    // TODO: add reducers
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
