import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApolloClient,HttpLink,InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter } from 'react-router-dom'
const client = new ApolloClient({
    link: new HttpLink({uri: "http://localhost:5001/graphql"}),
    cache: new InMemoryCache()});
ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

