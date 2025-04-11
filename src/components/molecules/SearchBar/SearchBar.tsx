// import { useState, useEffect, useContext } from 'react'
import { SearchBarInterface } from './SearchBar.interface'
import {SearchInput} from "../../atoms";

/// TODO: update interface/arguments for SearchBar
const SearchBar = ({testID, style, type, size, props }:SearchBarInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `SearchBar` }>

        </div>
    )

}

export default SearchBar
