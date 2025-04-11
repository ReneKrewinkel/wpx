// import { useState, useEffect, useContext } from 'react'
import { DialPadInterface } from './DialPad.interface'

/// TODO: update interface/arguments for DialPad
const DialPad = ({testID, style, type, size, props }:DialPadInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `DialPad` }>
        </div>
    )

}

export default DialPad
