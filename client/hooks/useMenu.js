import { useState } from "react";

const useMenu = () =>{
    const [visibleMenu, setMenu] = useState()

    const showMenu = () =>{
        setMenu(!visibleMenu)
    }
    return [visibleMenu, showMenu]
}

export default useMenu