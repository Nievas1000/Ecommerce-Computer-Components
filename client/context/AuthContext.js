import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Context = createContext({});

export function ContextAuthProvider({ children }) {
  axios.defaults.withCredentials = true;
  const [user, setUser] = useState({})
  const [isLogged, setIsLogged] = useState(false)
  const router = useRouter()

  useEffect(()=>{
    const getUser = async () =>{
      try {
        let response = await axios.get('http://localhost:3001/login');
        console.log(response)
        if(response.data.isLogged){
          setIsLogged(true)
          saveUser(response.data.user)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getUser();
  },[isLogged])

  const saveUser = (user) =>{
    setUser({
      ...user
    })
  }
  return (
    <Context.Provider value={{isLogged, setIsLogged, user}}>
      {children}
    </Context.Provider>
  );
}

export default Context;
