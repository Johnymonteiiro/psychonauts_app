import { Link } from "react-router-dom";
import { FaListAlt } from "react-icons/fa";
import { Input } from "../Input";
import { Container, Content, Wrapper } from "./style";

export function Header () {


    return(
        <>
          <Wrapper>
              <Container>
                  <Content>
                      <Link to='/'>
                        <h1 className="logo-title">PSYCHONAUTS</h1>
                      </Link>
                      <Input/>
                      <Link to='/favorites' className="link">
                        <FaListAlt size={25}/>
                        <p className="favorite-link">Favorites</p>
                      </Link>
                  </Content>
              </Container>
          </Wrapper>
        </>
    )
}