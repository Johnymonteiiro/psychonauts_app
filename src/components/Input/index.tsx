import { BiSearch } from "react-icons/bi";
import { useCharacters } from "../../hooks/useCharacters";
import { Container, InputArea } from "./style";


export function Input () {

    const { searchValue, handleChange} = useCharacters();
    
    return (
        <>
          <Container>
          <InputArea
          type="text"
          placeholder="search your heroe"
          onChange={handleChange}
          value={searchValue}
         />
         <BiSearch size={25} color="#000"/>
          </Container>
        </>
    )
}