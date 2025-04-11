// import { useState, useEffect, useContext } from 'react'
import { ContactsInterface } from './Contacts.interface'
import {DialPad, PhoneBook} from "../../organisms";

/// TODO: update interface/arguments for Contacts
const Contacts = ({testID, style, type, size, props }:ContactsInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Contacts` }>
           <PhoneBook />
            <DialPad />
        </div>
    )

}

export default Contacts
