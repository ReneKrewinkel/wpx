// import { useState, useEffect, useContext } from 'react'
import { CallHistoryInterface } from './CallHistory.interface'

/// TODO: update interface/arguments for CallHistory
const CallHistory = ({testID, style, type, size, props }:CallHistoryInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `CallHistory` }>
            CallHistory
        </div>
    )

}

export default CallHistory
