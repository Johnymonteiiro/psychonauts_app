import { useCharacters } from "../../hooks/useCharacters";
import { Container, Content, Img, Info, Wrapper } from "./style";

export function Psypowers() {
  const { psypower, data } = useCharacters();

  return (
    <>
      <Container>
        <h1 className="principal-title">SUPER POWERS</h1>
        <Wrapper>
          <Content>
            <Img>
              <img src={data.img} alt="" />
              <p className="hero-name">{data.name}</p>
            </Img>
            <Info>
              {psypower.map((power, index) => (
                <div className="infoContainer" key={index}>
                  <div className="psipower">
                    <img src={power.img} alt={power.name} />
                    <p className="title">{power.name}</p>
                  </div>
                  <div className="desc">
                    <p className="descriptions">{power.description}</p>
                  </div>
                </div>
              ))}
            </Info>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
}
