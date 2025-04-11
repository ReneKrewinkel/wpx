// import { useState, useEffect, useContext } from 'react'
import { RecordingsInterface } from './Recordings.interface'
import { useParams } from "react-router-dom"

/// TODO: update interface/arguments for Recordings
const Recordings = ({testID, style, type, size, props }:RecordingsInterface) => {

  const { id } = useParams()
    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Recordings` }>
            Recordings + { id }
        </div>
    )

}

export default Recordings
