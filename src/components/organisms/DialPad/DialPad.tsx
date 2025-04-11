// import { useState, useEffect, useContext } from 'react'
import { DialPadInterface } from './DialPad.interface'
import {DialList} from "../../molecules";

const DialPad = ({testID, style, type, size, props }:DialPadInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `DialPad` }>
          <h2>Dial Pad</h2>
            <DialList />
        </div>
    )

}

export default DialPad
