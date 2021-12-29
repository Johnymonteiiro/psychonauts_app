
import NavPage from "react-paginate";
import { useCharacters } from "../../hooks/useCharacters";
import { Page} from "./style";

export function Paginate () {
    
    const { countPage, NumberPage } = useCharacters();

    const changePage = ({selected}:any) => {
        NumberPage(selected)
    };

    return (
        <>
          <Page>
            <NavPage
              previousLabel={"Prev"}
              nextLabel={"Next"}
              pageCount={countPage}
              onPageChange={changePage}
              containerClassName={"paginationBtns"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              activeClassName={"paginationActive"}
              marginPagesDisplayed={1}
            />
          </Page>

        </>
      );
}