import { createContext, useContext, useState } from "react";

export const GameContext = createContext()

export const useGame = () => {return useContext(GameContext)}

export const CartProvider = ({children}) =>{
    const [carro, setCarro] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [carroVisible, setVisibilidad] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)


    const agregarAlCarro = (product) =>{
        if(carro.find(x => x.id === product.id)){
            return alert("You already have this game in your cart")
        }
        setCarro([
            ...carro,
            product,
        ])
        setCantidad(cantidad + 1)
        setTotalPrice(totalPrice + product.price)
    }
    const mostrarCarro = () =>{
        setVisibilidad(!carroVisible)
    }

    const removeFromCart = (product) =>{
        let indice = carro.indexOf(carro.find(x => x.id === product.id))
        carro.splice(indice,1)
        setCarro([...carro])
        setCantidad(cantidad - 1)
        setTotalPrice(totalPrice - product.price)
    }

    return(
        <GameContext.Provider value={{carro, cantidad, carroVisible, agregarAlCarro, mostrarCarro, removeFromCart, totalPrice}}>{children}</GameContext.Provider>
    )
}