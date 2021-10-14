import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const ListBeersContext = createContext([]);

export const ListBeersProvider = ({ children }) => {

    const [beers, setBeers] = useState([]);
    const [countPage, setCountPage] = useState(1);

    const nextPage = () => {
        if(countPage < 13) {
            setCountPage(countPage + 1)
        }
    }

    const previousPage = () => {
        if (countPage > 0) {
            setCountPage(countPage - 1)
        }   
    }

    useEffect(() => {
        axios
        .get(`https://api.punkapi.com/v2/beers?page=${countPage}`)
        .then(res => setBeers(res.data))
        .catch((err) => console.log(err))
    }, [countPage])
    

    return (
        <ListBeersContext.Provider value={{ beers, countPage, nextPage, previousPage }}>
            {children}
        </ListBeersContext.Provider>
    )
}