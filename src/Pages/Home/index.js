import ButtonPage from "../../components/ButtonPage/Index";
import ListBeers from "../../components/ListBeers";
import Menu from "../../components/Menu";


const Home = () => {

    return (
        <>
            <Menu />
            <h1 className="title-page"> Cervejas disponíveis </h1>
            <ListBeers />
            <ButtonPage />
        </>
    )
}

export default Home;