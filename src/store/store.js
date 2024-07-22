import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { reportSlice } from "./report/reportSlice";



 export const store= configureStore ( {
    
        reducer:{
            auth:authSlice.reducer,
            report:reportSlice.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck:false
        })
    
})