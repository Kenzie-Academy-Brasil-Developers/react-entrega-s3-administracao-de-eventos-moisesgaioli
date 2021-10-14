import { createContext, useContext, useState } from "react";
import { ListBeersContext } from "../ListBeers";


export const CasamentoContext = createContext([])

export const CasamentoProvider = ({ children }) => {

    const [inCasamento, setinCasamento] = useState([])

    const { beers } = useContext(ListBeersContext)

    const handleAddBeerCasamento = (beerId) => {
        const addBeer = beers.find(item => item.id === beerId)

        setinCasamento([...inCasamento, addBeer])
    }

    const handleRemoveBeerCasamento = (beerId) => {
        const removeBeer = beers.filter(item => item.id !== beerId)

        setinCasamento([...inCasamento, removeBeer])
    }

    return (
        <CasamentoContext.Provider value={{ inCasamento, handleAddBeerCasamento, handleRemoveBeerCasamento }}>
            {children}
        </CasamentoContext.Provider>
    )
}