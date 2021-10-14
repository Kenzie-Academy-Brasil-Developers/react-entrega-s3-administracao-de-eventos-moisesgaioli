import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const CasamentoContext = createContext([])

export const CasamentoProvider = ({ children }) => {

    const [inCasamento, setinCasamento] = useState([])

    const handleAddBeerCasamento = (beer) => {

        const inList = inCasamento.find(item => item.id === beer.id)

        if(!inList) {
            setinCasamento([...inCasamento, beer])
        } else {
            toast.error("Este produto já pertence à lista.")
        }

    }

    const handleRemoveBeerCasamento = (beer) => {
        const removeBeer = inCasamento.filter(item => item.id !== beer.id)

        setinCasamento(removeBeer)
    }

    return (
        <CasamentoContext.Provider value={{ inCasamento, handleAddBeerCasamento, handleRemoveBeerCasamento }}>
            {children}
        </CasamentoContext.Provider>
    )
}