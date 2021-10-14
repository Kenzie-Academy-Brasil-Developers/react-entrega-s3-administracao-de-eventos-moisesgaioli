import { CasamentoProvider } from "./Casamento";
import { ConfraternizacaoProvider } from "./Confraternizacao";
import { FormaturaProvider } from "./Formatura";
import { ListBeersProvider } from "./ListBeers"

const Providers = ({ children }) => {

    return (
        <ListBeersProvider>
            <CasamentoProvider>
                <FormaturaProvider>
                    <ConfraternizacaoProvider>
                        {children}
                    </ConfraternizacaoProvider>
                </FormaturaProvider>
            </CasamentoProvider>
        </ListBeersProvider>
    )
}

export default Providers;