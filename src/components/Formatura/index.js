import { useContext } from "react";
import { FormaturaContext } from "../../Providers/Formatura";


const FormaturaComponent = () => {

    const { inFormatura, handleRemoveBeerFormatura } = useContext(FormaturaContext)

    return (
        <>
            <h1> Formatura </h1>
            {
                inFormatura.map(item => {
                    return <div>
                        <h2> {item.name} </h2>
                        <figure>
                            <img src={item.image_url} alt={item.name} />
                        </figure>
                        <p> {item.description} </p>
                        <p> Data de fabricação: {item.first_brewed} </p>
                        <p> Litros: {item.volume.value}L </p>
                        <button onClick={() => handleRemoveBeerFormatura(item.id)}> Remove </button>
                    </div>
                })
            }
        </>
    )
}

export default FormaturaComponent;