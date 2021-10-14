import { createContext, useContext, useState } from "react";
import { ListBeersContext } from "../ListBeers";


export const ConfraternizacaoContext = createContext([])

export const ConfraternizacaoProvider = ({ children }) => {

    const [inConfraternizacao, setinConfraternizacao] = useState([])

    const { beers } = useContext(ListBeersContext)

    const handleAddBeerConfraternizacao = (beerId) => {
        const addBeer = beers.find(item => item.id === beerId)

        setinConfraternizacao([...inConfraternizacao, addBeer])
    }

    const handleRemoveBeerConfraternizacao = (beerId) => {
        const removeBeer = beers.filter(item => item.id !== beerId)

        setinConfraternizacao([...inConfraternizacao, removeBeer])
    }

    return (
        <ConfraternizacaoContext.Provider value={{ inConfraternizacao, handleAddBeerConfraternizacao, handleRemoveBeerConfraternizacao }}>
            {children}
        </ConfraternizacaoContext.Provider>
    )
}