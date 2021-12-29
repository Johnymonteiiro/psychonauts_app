import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";
import { CardContent, Container, Wrapper } from "./style";

export function Favorites() {
  const { favorites, removeHeroes,seePower } = useCharacters();

  function hanleRemove(name: string) {
    removeHeroes(name);
  }

  function handle  (psypower: any, data : any) {
    seePower(psypower, data)
  }

  return (
    <>
      <Container>
       <h1 className="principal-title">FAVORITE HEROES</h1>
        {favorites.length > 0 &&(
            <Wrapper>
            {favorites.map((character, index) => (
              <CardContent key={index}>
                <img src={character.img} alt={character.name} />
                <div className="info">
                  <p className="title">{character.name}</p>
                  <button
                    className="addbtn"
                    onClick={() => hanleRemove(character.name)}
                  >
                    <MdDelete className="addIcons" size={25} />
                  </button>
                </div>
                <Link to="/psipowers">
                  <button className="btn-link" onClick={() =>handle(character.psiPowers, character)}>Powers</button>
                </Link>
              </CardContent>
            ))}
          </Wrapper>
        )}
        {favorites.length === 0 &&(
           <h1 className="warning">No Hero added :)</h1>
        )}
      </Container>
    </>
  );
}
