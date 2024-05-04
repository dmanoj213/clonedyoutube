import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({

    name: "app",
    initialState: {
        isMenuOpen: false,
    },

    reducers: {
        togglemenu: (state) =>
        {
            state.isMenuOpen = !state.isMenuOpen;
        },

        closeMenu: (state) =>
        {
            state.isMenuOpen = false;
        }
    }


})

export const{togglemenu,closeMenu} = navSlice.actions;

export default navSlice.reducer;

