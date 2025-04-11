import { useState } from 'react'
import { SearchInputInterface } from './SearchInput.interface'

const SearchInput = ({testID, handler }:SearchInputInterface) => {

    const [inputValue, setInputValue] = useState<string>("")


    const handleChange = (value: string) => {
        setInputValue(value)
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
                       value={inputValue}/>
        </div>
    )

}

export default SearchInput
