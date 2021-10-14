import { ListBeersContext } from "../../Providers/ListBeers";
import { useContext } from "react";

const ButtonPage = () => {

    const { countPage, nextPage, previousPage } = useContext(ListBeersContext)


    return (
        <div>
            {
                countPage === 1 ? <button disabled onClick={previousPage}> Página anterior </button> : <button onClick={previousPage}> Página anterior </button>
            }
            {
                countPage === 13 ? <button disabled onClick={nextPage}> Próxima página </button> : <button onClick={nextPage}> Próxima página </button>
            }     
        </div>
    )
}

export default ButtonPage;