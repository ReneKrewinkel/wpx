 import { useContext } from 'react'
import { DialListInterface } from './DialList.interface'
import { ContactContext } from "../../../context"
 import ContactItem from "../ContactItem";

const DialList = ({testID, style, type, size, props }:DialListInterface) => {

    const ctx: any = useContext(ContactContext)

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `DialList` }>
            {
                ctx.callList.length > 0 && ctx.callList.map((contact: any, index: number) => {
                    return(
                      <div key={index} onClick={() => ctx.removeFromList(contact)}>
                          <ContactItem  item={contact}/>
                      </div>
                    )

                })
            }
        </div>
    )

}

export default DialList
