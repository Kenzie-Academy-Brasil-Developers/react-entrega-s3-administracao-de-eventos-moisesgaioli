import { useContext } from "react";
import { CasamentoContext } from "../../Providers/Casamento";


const CasamentoComponent = () => {

    const { inCasamento, handleRemoveBeerCasamento } = useContext(CasamentoContext)

    return (
        <>
            <h1> Casamento </h1>
            {
                inCasamento.map(item => {
                    return <div>
                        <h2> {item.name} </h2>
                        <figure>
                            <img src={item.image_url} alt={item.name} />
                        </figure>
                        <p> {item.description} </p>
                        <p> Data de fabricação: {item.first_brewed} </p>
                        <p> Litros: {item.volume.value}L </p>
                        <button onClick={() => handleRemoveBeerCasamento(item.id)}> Remove </button>
                    </div>
                })
            }
        </>
    )
}

export default CasamentoComponent;