import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import OAutorze from "../oAutorze/oAutorze";
import Form from "../form/form";

export default function RouterExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/oAutorze222"> O Autorze</Link>
                    </li>
                    <li>
                        <Link to="/formularz"> Formularz</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/oAutorze222">
                        <OAutorze/>
                    </Route>

                    <Route exact path="/formularz">
                        <Form/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

