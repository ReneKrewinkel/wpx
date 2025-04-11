// import { useState, useEffect, useContext } from 'react'
import { ContactItemInterface } from './ContactItem.interface'

const ContactItem = ({testID, item }:ContactItemInterface) => {

    return(
        <div data-testid={ testID }
             className={ `ContactItem` }>
            <div className={'ContactItem__avatar'}>{ item.avatar.initials }</div>
            <div className={'ContactItem__name'}>{ item.name }</div>
        </div>
    )

}

export default ContactItem
