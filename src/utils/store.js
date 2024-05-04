import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../utils/navSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import ProfileSlice from "./ProfileSlice";

const store = configureStore({
 
    reducer: {
        app : appSlice,
        search : searchSlice,
        chat: chatSlice,
        profile: ProfileSlice,
    }

})

export default store;

