import { useContext } from "react"
import { ListBeersContext } from "../../Providers/ListBeers";
import CardBeers from "../CardBeers";



const ListBeers = () => {

    const { beers } = useContext(ListBeersContext);


    return (
        <div className="card-container">
            {
               beers.map(item => <CardBeers key={item.id} item={item} />)
            }
        </div>

        
    )
}

export default ListBeers;