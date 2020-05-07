import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import App from '../App';
import {Router} from 'react-router-dom'
describe('App component',()=> {
    it('Testing rendering of app', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App/>
            </Router>,
        );
        expect(location.pathname).toBe('/')
    }),
        it('If user enters a non existant pathname',async ()=>{
            const history = createMemoryHistory();
            history.push('/fkjadshfdusk')
          const wrapper=  render(
                <Router history={history}>
                    <App/>
                </Router>,
            );
            const error=await wrapper.findByText('404 Not Found')
            expect(error.innerHTML).toBe('404 Not Found')
        })
})