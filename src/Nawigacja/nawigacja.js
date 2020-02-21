import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
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
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/oAutorze222"> O Autorze</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/formularz"> Formularz</Link>
                    </li>
                </ul>
                </nav>
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

