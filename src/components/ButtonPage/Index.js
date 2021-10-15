import { ListBeersContext } from "../../Providers/ListBeers";
import { useContext } from "react";
import "./styles.css"

const ButtonPage = () => {

    const { countPage, nextPage, previousPage } = useContext(ListBeersContext)


    return (
        <div className="btn-page-container">
            {
                countPage === 1 ?
                                 <button className="btn-page" disabled onClick={previousPage}> Página anterior </button> 
                                    : <button className="btn-page" onClick={previousPage}> Página anterior </button>
            }
            {
                countPage === 13 ?
                                 <button className="btn-page" disabled onClick={nextPage}> Próxima página </button> 
                                    : <button className="btn-page" onClick={nextPage}> Próxima página </button>
            }     
        </div>
    )
}

export default ButtonPage;