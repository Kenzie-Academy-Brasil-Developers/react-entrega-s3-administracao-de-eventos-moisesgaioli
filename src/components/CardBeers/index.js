import { useContext } from "react"
import { CasamentoContext } from "../../Providers/Casamento"
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao"
import { FormaturaContext } from "../../Providers/Formatura"

const CardBeers = ({ item }) => {

    const { handleAddBeerCasamento } = useContext(CasamentoContext)
    const { handleAddBeerFormatura } = useContext(FormaturaContext)
    const { handleAddBeerConfraternizacao } = useContext(ConfraternizacaoContext)
    
    return (
        <>
            <div className="beer-container">
                <h2 className="beer-title"> {item.name} </h2>
                <figure>
                    <img className="beer-image" src={item.image_url} alt={item.name} />
                </figure>
                <p className="beer-description"> {item.description} </p>
                <p className="beer-date"> Data de fabricação: {item.first_brewed} </p>
                <p className="beer-volume"> Litros: {item.volume.value}L </p>
                <button className="btn-add casamento" onClick={() => handleAddBeerCasamento(item)}> Adicionar Casamento </button>
                <button className="btn-add formatura" onClick={() => handleAddBeerFormatura(item)}> Adicionar Formatura </button>
                <button className="btn-add confraternizacao" onClick={() => handleAddBeerConfraternizacao(item)}> Adicionar Confraternização </button>
            </div>
        </>
    )
}

export default CardBeers