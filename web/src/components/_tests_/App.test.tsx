import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import App from '../App';
import {Router} from 'react-router-dom'

it('testing rendering of table',()=> {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <App />
        </Router>,
    );
    expect(location.pathname).toBe('/')
})