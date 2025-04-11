import { useContext } from 'react'
import { ContactListInterface } from './ContactList.interface'
import ContactItem from "../ContactItem";

import { ContactContext } from "../../../context"

const ContactList = ({testID, data }:ContactListInterface) => {

    const ctx: any = useContext(ContactContext)


    return(
        <div data-testid={ testID }
             className={ `ContactList` }>
            {
                data && data.map( (contact, index) => {
                      return (
                        <div key={index} onClick={() => ctx.addToList(contact)}>
                            <ContactItem  item={contact} />
                        </div>
                      )
                  })
            }
        </div>
    )

}

export default ContactList
