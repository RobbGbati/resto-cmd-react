import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "../features/cart/cartSlice";
import { ownerSlice } from "../features/owner/ownerSlice";
import { notesSlice } from "../features/notes/notesSlices";
import { thunk } from 'redux-thunk'
import { menuSlice } from "../features/menu/menuSlice";
import { api } from "../services/api.service";

let initialState = {
    value: null,
    list: [],
    owner: {}
};

export const store = configureStore(
    {
        preloadedState: initialState,
        reducer: combineReducers({
            list: cartSlice.reducer,
            owner: ownerSlice.reducer,
            notes: notesSlice.reducer,
            menu: menuSlice.reducer,
            [api.reducerPath]: api.reducer
        }),
        // Liste des middlewares
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware()
                .concat(api.middleware)
                .concat(thunk)
        
        
    }
)