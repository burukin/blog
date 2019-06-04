import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/layout/NotFound';

//App component with routes
const App = () => {
    return (
        <section className="container">
            <Provider store={store}>
                <Router>
                    <Switch>
                            <Route exact path="/" component={Posts}/>
                            <Route exact path="/posts/:id" component={Post}/>
                            <Route component={NotFound}/>
                    </Switch>
                </Router>
            </Provider>
        </section>

    );
};

export default App;
