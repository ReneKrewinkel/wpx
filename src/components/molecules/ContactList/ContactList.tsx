// import { useState, useEffect, useContext } from 'react'
import { ContactListInterface } from './ContactList.interface'
import ContactItem from "../ContactItem";

const ContactList = ({testID, data }:ContactListInterface) => {

    return(
        <div data-testid={ testID }
             className={ `ContactList` }>
            {
                data && data.map( (contact, index) => {
                      return (
                        <ContactItem key={index} item={contact} />
                      )
                  })
            }
        </div>
    )

}

export default ContactList
