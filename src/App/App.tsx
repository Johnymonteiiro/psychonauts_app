import { CharactersProvider } from "../hooks/useCharacters";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "../Styles/globalStyle";
import { Header } from "../components/Header";
import { RoutesLink} from "../Routes/routes";
import { ToastContainer } from "react-toastify";


export function App() {
  return (
    <>
      <BrowserRouter>
        <CharactersProvider>
          <GlobalStyle />
          <Header/>
          <RoutesLink/>
          <ToastContainer autoClose={3000} />
        </CharactersProvider>
      </BrowserRouter>
    </>
  );
}
