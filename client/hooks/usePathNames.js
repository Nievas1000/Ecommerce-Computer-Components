import { useContext, useEffect } from "react"
import { useRouter } from "next/router";
import AuthContext from "../context/AuthContext"

export const usePathName = () =>{
    const router = useRouter();
    const {isLogged} = useContext(AuthContext)

    useEffect(() =>{
        const getLogged = () =>{
            if(isLogged){
                if(router.pathname === "/signin" || router.pathname === "/signup"){
                    router.back();
                }
            }
    
        }
        getLogged()
    },[])
}