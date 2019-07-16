import React from 'react';
import Layout from './components/hoc/layout';
import { Switch, Route} from 'react-router-dom';
import Home from './components/home';
const Routes = (props) => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </Layout>
    )
}

export default Routes;
