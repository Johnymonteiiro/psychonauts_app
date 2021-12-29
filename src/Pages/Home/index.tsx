import { Cards } from "../../components/Card";
import { useCharacters } from "../../hooks/useCharacters";
import { Container } from "./style";

export function Home() {
  const { loading } = useCharacters();
  return (
    <Container>
      {loading ? (
        <h1 className="warning">LOANDING...</h1>
      ) : (
        <>
          <Cards />
        </>
      )}
    </Container>
  );
}
