import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const FormaturaContext = createContext([])

export const FormaturaProvider = ({ children }) => {

    const [inFormatura, setinFormatura] = useState([])

    const handleAddBeerFormatura = (beer) => {
        const inList = inFormatura.find(item => item.id === beer.id)

        if(!inList) {
            setinFormatura([...inFormatura, beer])
        } else {
            toast.error("Este produto já pertence à lista.")
        }
    }

    const handleRemoveBeerFormatura = (beer) => {
        const removeBeer = inFormatura.filter(item => item.id !== beer.id)

        setinFormatura(removeBeer)
    }

    return (
        <FormaturaContext.Provider value={{ inFormatura, handleAddBeerFormatura, handleRemoveBeerFormatura }}>
            {children}
        </FormaturaContext.Provider>
    )
}