import { FormEvent, useState, ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { TbSearch } from "react-icons/tb";


type SearchBarProps = {
  onSubmit: (value: string) => void
 }

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) {
      toast.error("Please enter a search query!");
      return;
    }

    onSubmit(query.trim());
      setQuery(""); 
      
      
  };

  return (
    <header>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
        />
        <button className={s.searchBtn} type="submit" ><TbSearch /></button>
      </form>
    </header>
  );
};

export default SearchBar;