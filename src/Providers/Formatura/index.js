import { createContext, useContext, useState } from "react";
import { ListBeersContext } from "../ListBeers";


export const FormaturaContext = createContext([])

export const FormaturaProvider = ({ children }) => {

    const [inFormatura, setinFormatura] = useState([])

    const { beers } = useContext(ListBeersContext)

    const handleAddBeerFormatura = (beerId) => {
        const addBeer = beers.find(item => item.id === beerId)

        setinFormatura([...inFormatura, addBeer])
    }

    const handleRemoveBeerFormatura = (beerId) => {
        const removeBeer = beers.filter(item => item.id !== beerId)

        setinFormatura([...inFormatura, removeBeer])
    }

    return (
        <FormaturaContext.Provider value={{ inFormatura, handleAddBeerFormatura, handleRemoveBeerFormatura }}>
            {children}
        </FormaturaContext.Provider>
    )
}