import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import OAutorze from "../oAutorze/oAutorze";

export default function RouterExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/oAutorze222"> O Autorze</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/oAutorze222">
                        <OAutorze/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

