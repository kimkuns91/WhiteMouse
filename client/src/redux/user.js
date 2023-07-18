import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    id: '',
    nickname:'',
    isLogined : false
}

export const userSlice = createSlice({
    name: "user",
    initialState: { 
        value: initialStateValue
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialStateValue
        }
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
