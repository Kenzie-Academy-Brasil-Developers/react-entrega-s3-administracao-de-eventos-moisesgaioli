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
            <h1> Cervejas disponíveis </h1>
            <div>
                <h2> {item.name} </h2>
                <figure>
                    <img src={item.image_url} alt={item.name} />
                </figure>
                <p> {item.description} </p>
                <p> Data de fabricação: {item.first_brewed} </p>
                <p> Litros: {item.volume.value}L </p>
                <button onClick={() => handleAddBeerCasamento(item.id)}> Adicionar Casamento </button>
                <button onClick={() => handleAddBeerFormatura(item.id)}> Adicionar Formatura </button>
                <button onClick={() => handleAddBeerConfraternizacao(item.id)}> Adicionar Confraternização </button>
            </div>
        </>
    )
}

export default CardBeers