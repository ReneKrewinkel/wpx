// import { useState, useEffect, useContext } from 'react'
import { QueueInterface } from './Queue.interface'

/// TODO: update interface/arguments for Queue
const Queue = ({testID, style, type, size, props }:QueueInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Queue` }>
            Queue
        </div>
    )

}

export default Queue
