import React from 'react'
import Pagination from "@material-ui/lab/Pagination";
const SearchBar = (props: any) => {
    const {setSearch, setPageNumber} = props;

    let searchButton = (e: any) =>{
        e.preventDefault();
    };

    return (
        <>
        <form
        className={` d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
      >
        <input
          onChange={(e) => {
            setPageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Search for characters"
          type="text"
        />
        <button
          onClick={searchButton}
          className={` btn btn-primary fs-5`}
        >
          Buscar
        </button>
      </form>
      </>
  )
}

export default SearchBar