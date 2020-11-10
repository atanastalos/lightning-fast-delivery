import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import HomePage from './HomePage';
import Contact from './Contact';
import CoC from './CoC';

class Home extends Component {

    render() {
        return (
            <Router>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/coc">
                            <CoC/>
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default Home;
