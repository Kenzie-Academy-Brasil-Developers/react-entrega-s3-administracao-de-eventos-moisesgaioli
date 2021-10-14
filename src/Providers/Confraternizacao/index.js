import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ConfraternizacaoContext = createContext([])

export const ConfraternizacaoProvider = ({ children }) => {

    const [inConfraternizacao, setinConfraternizacao] = useState([])

    const handleAddBeerConfraternizacao = (beer) => {
        const inList = inConfraternizacao.find(item => item.id === beer.id)

        if(!inList) {
            setinConfraternizacao([...inConfraternizacao, beer])
        } else {
            toast.error("Este produto já pertence à lista.")
        }
    }

    const handleRemoveBeerConfraternizacao = (beer) => {
        const removeBeer = inConfraternizacao.filter(item => item.id !== beer.id)

        setinConfraternizacao(removeBeer)
    }

    return (
        <ConfraternizacaoContext.Provider value={{ inConfraternizacao, handleAddBeerConfraternizacao, handleRemoveBeerConfraternizacao }}>
            {children}
        </ConfraternizacaoContext.Provider>
    )
}