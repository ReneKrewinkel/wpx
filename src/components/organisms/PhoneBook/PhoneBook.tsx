 import { useState,  useEffect } from 'react'
import { PhoneBookInterface } from './PhoneBook.interface'
//import {SearchBar} from "../../molecules";
import {SearchInput} from "../../atoms";
import {useFetch} from "../../../hooks";
import {ContactList} from "../../molecules";

const PhoneBook = ({testID, style, type, size, props }:PhoneBookInterface) => {

    const {  data, isLoaded, error } = useFetch("http://localhost:999/people")
    const [ filtered, setFiltered ]= useState(data)

    const [searchTerm, setSearchTerm] = useState("")

    useEffect( () => setFiltered(data), [data])

    const handleSearch = (st: string) => {
      setSearchTerm(st )
      const result = data.filter((contact: any) => {
        return contact?.name?.toLowerCase().includes(st.toLowerCase())
       || contact.avatar.initials.toLowerCase().includes(st.toLowerCase())
      })
      setFiltered(result);
    }

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `PhoneBook` }>
            <h2>Phonebook</h2>
            <SearchInput handler={handleSearch} value={searchTerm}/>
          { isLoaded &&<ContactList data={filtered} /> }
          { error && <div>{error}</div> }
        </div>
    )

}

export default PhoneBook
