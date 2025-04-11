import { useState } from 'react'
import { SearchInputInterface } from './SearchInput.interface'

const SearchInput = ({testID, handler, value ="" }:SearchInputInterface) => {



    const handleChange = (value: string) => {
        // setInputValue(value)
        if(handler) {
            handler(value)
        }
    }

    return(
        <div data-testid={ testID }
             className={ `SearchInput` }>
            <input type="text"
                       onChange={(e) => handleChange(e.target.value)}
                       placeholder="Search..."
                       value={value}/>
        </div>
    )

}

export default SearchInput
