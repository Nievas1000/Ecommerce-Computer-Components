import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const GameContext = createContext()

export const useGame = () => {return useContext(GameContext)}

export const CartProvider = ({children}) =>{
    const [carro, setCarro] = useState([]);
    const [cantidad, setCantidad] = useState(0)
    const [carroVisible, setVisibilidad] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    const [amountProd, setAmountProd] = useState(1);



    useEffect(()=>{
        const getProdsCart = async () =>{
            try {
                let result = await axios.get('http://localhost:3001/getProds')
                console.log(result)
                if(result.data.length > 0){
                        setCarro(result.data)
                        setCantidad(result.data.length)
                        for (let i = 0; i < result.data.length; i++) {
                            setTotalPrice(totalPrice+ result.data[i].price)
                        }
                }
            }catch (error) {
                console.log(error)
          }
        }
        getProdsCart();
    },[])


    const agregarAlCarro = async(product) =>{
            try {
                let result = await axios.post(`http://localhost:3001/add/${product.id}`)
                    setCarro(result.data)
                    setCantidad(carro.length + 1);
                    for (let i = 0; i < result.data.length; i++) {
                        setTotalPrice(totalPrice+ result.data[i].price)
                    }
            } catch (error) {
                console.log(error)
            }
    }

    /*const agregarAlCarro = (product) =>{
        if(carro.find(x => x.id === product.id)){
            return alert("You already have this game in your cart")
        }
        setCarro([
            ...carro,
            product,
        ])
        setCantidad(cantidad + 1)
        setTotalPrice(totalPrice + product.price)
    }*/
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
        <GameContext.Provider value={{carro, cantidad, carroVisible, agregarAlCarro, mostrarCarro, removeFromCart, totalPrice,amountProd, setAmountProd}}>{children}</GameContext.Provider>
    )
}