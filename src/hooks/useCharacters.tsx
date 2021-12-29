import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { CharactersTypes } from "../types/types";

interface CharactersProps {
  heroes: CharactersTypes[];
  favorites: CharactersTypes[];
  searchValue: string;
  loading: boolean;
  psypower: CharactersTypes[];
  data: any;
  countPage: number;
  handleChange: (e: any) => void;
  addHeroes: (name: string) => Promise<void>;
  removeHeroes: (name: string) => void;
  NumberPage: (num: number) => void;
  seePower: (power: any, data: any) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const charactersContext = createContext<CharactersProps>({} as CharactersProps);

export function CharactersProvider({ children }: ChildrenProps) {
  const [characters, setCharacters] = useState<CharactersTypes[]>([]);
  const [psypower, setPsypower] = useState<CharactersTypes[]>([]);
  const [data, setData] = useState<CharactersTypes[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const postPerPage = 4;
  const pageVisited = pageNumber * postPerPage;
  const heroes = characters.slice(pageVisited, pageVisited + postPerPage);
  const countPage = Math.ceil(characters.length / postPerPage);

  const [favorites, setFavorites] = useState<CharactersTypes[]>(() => {
    const getFavorite = localStorage.getItem("@psychonauts");

    if (getFavorite) {
      return JSON.parse(getFavorite);
    }

    return [];
  });

  useEffect(() => {
    async function getCharacters() {
      if (searchValue) {
        const myHeroes = await api
          .get(`/characters?name=${searchValue}`)
          .then((resp) => {
            return resp.data;
          });

        const data = {
          ...myHeroes,
        };

        const resultArray = Array(data);
        setCharacters(resultArray);
      } else {
        await api
          .get("/characters")
          .then((resp) => {
            setCharacters(resp.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getCharacters();
  }, [searchValue]);

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    setSearchValue(e.target.value);
  }

  async function addHeroes(name: string) {
    try {
      const updatedFavorites = [...favorites];

      const ExistHeroes = updatedFavorites.find(
        (favorite) => favorite.name === name
      );

      if (ExistHeroes) {
        toast.error("Heroes already exist!");
      } else {
        const myHeroes = await api
          .get(`/characters?name=${name}`)
          .then((resp) => {
            return resp.data;
          });

        updatedFavorites.push(myHeroes);
        toast.success("Added to the Favorite");
      }

      localStorage.setItem("@psychonauts", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } catch {
      toast.error("Heroes not found!");
    }
  }

  function removeHeroes(name: string) {
    const upDateFavorite = [...favorites];

    const ExistFavorite = upDateFavorite.findIndex(
      (favorite) => favorite.name === name
    );

    if (ExistFavorite >= 0) {
      upDateFavorite.splice(ExistFavorite, 1);
      localStorage.setItem("@psychonauts", JSON.stringify(upDateFavorite));
      setFavorites(upDateFavorite);
    } else {
      toast.error("Error to remove");
    }
  }

  async function seePower(power: any, data: any) {
    try {
      setPsypower(power);
      setData(data);
    } catch {
      toast.error("Heroes not found!");
    }
  }

  const NumberPage = (num: number) => {
    setPageNumber(num);
  };

  return (
    <charactersContext.Provider
      value={{
        heroes,
        favorites,
        searchValue,
        loading,
        countPage,
        psypower,
        data,
        handleChange,
        addHeroes,
        removeHeroes,
        NumberPage,
        seePower,
      }}
    >
      {children}
    </charactersContext.Provider>
  );
}

export function useCharacters() {
  const context = useContext(charactersContext);

  return context;
}
