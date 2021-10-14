import { useContext } from "react";
import { ConfraternizacaoContext } from "../../Providers/Confraternizacao";


const ConfraternizacaoComponent = () => {

    const { inConfraternizacao, handleRemoveBeerConfraternizacao } = useContext(ConfraternizacaoContext)

    return (
        <>
            <h1> Confraternização </h1>
            {
                inConfraternizacao.map(item => {
                    return <div>
                        <h2> {item.name} </h2>
                        <figure>
                            <img src={item.image_url} alt={item.name} />
                        </figure>
                        <p> {item.description} </p>
                        <p> Data de fabricação: {item.first_brewed} </p>
                        <p> Litros: {item.volume.value}L </p>
                        <button onClick={() => handleRemoveBeerConfraternizacao(item.id)}> Remove </button>
                    </div>
                })
            }
        </>
    )
}

export default ConfraternizacaoComponent;