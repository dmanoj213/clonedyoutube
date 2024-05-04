import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({

    name: "profile",
    initialState : {
       isProfileMenuOpen:  false,
    
    },
    reducers: {
        toggleProfileMenu : (state) =>
        {
            state.isProfileMenuOpen = !state.isProfileMenuOpen;
        }
    }
})

export const {toggleProfileMenu} = ProfileSlice.actions;

export default ProfileSlice.reducer;
