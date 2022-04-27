import { CgProfile } from "react-icons/cg";
import { BsSave2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { CgLogIn } from "react-icons/cg";
import AuthContext from "../context/AuthContext"
import { useContext } from "react"
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const MenuUser = () =>{
    const {setIsLogged,saveUser} = useContext(AuthContext)
    const router = useRouter()

    const closeSession = async () =>{
        try {
          let response = await axios.get('http://localhost:3001/logout');
          setIsLogged(false)
          router.reload()
        } catch (error) {
          console.log(error)
        }
      }

    return(
        <div className="menu">
            <ul>    
                <li className="item-menu"><CgProfile style={{fontSize:25, marginRight:10}} /> <Link href="/profile">Profile</Link> </li>
                <li className="item-menu"><BsSave2 style={{fontSize:25, marginRight:10}} />Saved</li>
                <li className="item-menu-setting"><IoSettingsOutline style={{fontSize:25, marginRight:10}} />Settings</li>
                <li className="item-menu" onClick={closeSession}> <CgLogOut style={{fontSize:25, marginRight:10}} />Log off</li>
            </ul>
        </div>
    )
}

export default MenuUser