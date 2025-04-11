import { useState } from 'react'
import { ContactsInterface } from './Contacts.interface'
import {DialPad, PhoneBook} from "../../organisms";
import { ContactContext } from "../../../context/";

const Contacts = ({testID, style, type, size, props }:ContactsInterface) => {

  const [callList, setCallList] = useState<any[]>([])


  const addToList =(contact: any) => {
      setCallList((prevList) => [...prevList, contact])
  }
  const removeFromList = (contact: any) => {
      setCallList((prevList) => prevList.filter((item) => item !== contact))
  }

    return(
      <ContactContext.Provider value={{callList, addToList, removeFromList}}>
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Contacts` }>
           <PhoneBook />
            <DialPad />
        </div>
      </ContactContext.Provider>
    )

}

export default Contacts
