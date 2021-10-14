import { Route, Switch } from "react-router";
import Casamento from "../Pages/Casamento";
import Confraternizacao from "../Pages/Confraternizacao";
import Formatura from "../Pages/Formatura";
import Home from "../Pages/Home";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/casamento"> 
                <Casamento />
            </Route>
            <Route path="/formatura">
                <Formatura />
            </Route>
            <Route path="/confraternizacao">
                <Confraternizacao />
            </Route>
        </Switch>
    )
}

export default Routes;