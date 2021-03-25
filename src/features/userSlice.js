import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        signup: (state, action) => {
            state.user = action.payload;
        },
        signout: (state, action) => {
            state.user = null;
        }
    }
})


export const { signup, signout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;