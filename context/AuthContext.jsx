import { createContext, useContext, useState } from "react";
import {supabase} from "../supabase/supabase.config"


const AuthContext = createContext();
export const AuthContextProvider = ({ children })=>{
    const [user,setUser] =useState([]);
    async function handleSignInWithGoogle(response) {
        try {
            const { data, error } = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: response.credential,
            });
            if(error) throw new Error ("Ocurrio un error durante la autenticacion");
            return data;
        } catch (error) {
            
        }
        
    }
    async function signout() {
        const { error } = await supabase.auth.signOut()
        if(error) throw new Error("Ocurrio un error durante el cierre de sesion")
    }
    return (
        <AuthContext.Provider value={{handleSignInWithGoogle,signout,user}}>
            {children}
        </AuthContext.Provider>
    )
      
};

export const UserAuth=()=>{
    return useContext (AuthContext);
}