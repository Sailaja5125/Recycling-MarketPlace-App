// creating a context with returning a boolean value where the default value is false as type script we are specifying the datatype of the Context that is created
import { createContext } from "react";

export const authContext = createContext({
    authStatus: false,
    setAuthStatus: ()=>{},
})

export const AuthProvider = authContext.Provider

export default authContext;