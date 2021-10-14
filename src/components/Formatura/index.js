import { useContext } from "react";
import { FormaturaContext } from "../../Providers/Formatura";


const FormaturaComponent = () => {

    const { inFormatura, handleRemoveBeerFormatura } = useContext(FormaturaContext)

    return (
        <>
            <h1> Formatura </h1>
            {
                inFormatura.map(item => {
                    return <div className="beer-container" key={item.id}>
                        <h2 className="beer-title"> {item.name} </h2>
                        <figure>
                            <img className="beer-image" src={item.image_url} alt={item.name} />
                        </figure>
                        <p className="beer-description"> {item.description} </p>
                        <p className="beer-date"> Data de fabricação: {item.first_brewed} </p>
                        <p className="beer-volume"> Litros: {item.volume.value}L </p>
                        <button className="btn-remove" onClick={() => handleRemoveBeerFormatura(item)}> Remover </button>
                    </div>
                })
            }
        </>
    )
}

export default FormaturaComponent;