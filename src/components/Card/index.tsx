import { Link } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { useCharacters } from "../../hooks/useCharacters";
import { CardContent, Container, Wrapper } from "./style";
import { Paginate } from "../Paginations";

export function Cards() {
  const { heroes, addHeroes, seePower } = useCharacters();

  const searchHero = String(
    heroes.map((hero) => {
      return hero.name;
    })
  );

  function handleAddFavorite(name: string) {
    addHeroes(name);
  }

  function handle(psypower: any, data: any) {
    seePower(psypower, data);
  }

  return (
    <>
      <Container>
        <Wrapper>
          {searchHero !== "" && (
            <>
              {heroes.map((character, index) => (
                <CardContent key={index}>
                  <img src={character.img} alt={character.name} />
                  <div className="info">
                    <p className="title">{character.name}</p>
                    <button
                      className="addbtn"
                      onClick={() => handleAddFavorite(character.name)}
                    >
                      <MdBookmarkAdd className="addIcons" size={25} />
                    </button>
                  </div>
                  <Link to="/psipowers">
                    <button
                      className="btn-link"
                      onClick={() => handle(character.psiPowers, character)}
                    >
                      Powers
                    </button>
                  </Link>
                </CardContent>
              ))}
            </>
          )}
        </Wrapper>
        {searchHero !== "" && <Paginate />}
        {searchHero === "" && <h1 className="warning"> Hero not found :)</h1>}
      </Container>
    </>
  );
}
