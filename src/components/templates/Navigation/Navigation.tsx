import { Outlet, Link } from "react-router-dom"
import { NavigationInterface } from './Navigation.interface'

const Navigation = ({testID, style, type, size, props }:NavigationInterface) => {

    return(
        <div data-testid={ testID }
             data-object-type={ type ?? ""}
             className={ `Navigation` }>

                <nav>
                    <ul>
                        <li><Link to="/">Contacts</Link></li>
                        <li><Link to="/queue">Queue</Link></li>
                        <li><Link to="/call-history">Call History</Link></li>
                        <li><Link to="/recordings/:id">Recordings</Link></li>
                    </ul>
                </nav>
                <Outlet />


        </div>
    )

}

export default Navigation
