import { useContext } from "react";
import authContext from "./authContext";

// we can use useContext directly but to organize the structure we create a function just for useAuth 
//and return the context
const useAuth = ()=>{
    const context = useContext(authContext);
    return context
}
export default useAuth;