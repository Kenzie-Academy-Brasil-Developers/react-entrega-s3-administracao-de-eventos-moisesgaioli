import { useContext } from "react";
import { CasamentoContext } from "../../Providers/Casamento";


const CasamentoComponent = () => {

    const { inCasamento, handleRemoveBeerCasamento } = useContext(CasamentoContext)

    return (
        <>
            <h1 className="title-page"> Casamento </h1>
            {
                inCasamento.map(item => {
                    return <div className="beer-container" key={item.id}>
                        <h2 className="beer-title"> {item.name} </h2>
                        <figure>
                            <img className="beer-image" src={item.image_url} alt={item.name} />
                        </figure>
                        <p className="beer-description"> {item.description} </p>
                        <p className="beer-date"> Data de fabricação: {item.first_brewed} </p>
                        <p className="beer-volume"> Litros: {item.volume.value}L </p>
                        <button className="btn-remove" onClick={() => handleRemoveBeerCasamento(item)}> Remover </button>
                    </div>
                })
            }
        </>
    )
}

export default CasamentoComponent;