import { createMemoryHistory } from "history";
import Frontpage from '../frontpage'
import React from "react";
import { Router } from "react-router"
import Enzyme,{mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
describe('FrontPage component',()=> {
    beforeAll(async () => {
        Enzyme.configure({adapter: new Adapter()});
    })
    it('Testing rendering of Frontpage', async () => {
        const history = createMemoryHistory();
        const wrapper=mount(
            <Router history={history}>
                <Frontpage/>
            </Router>,
        );
       wrapper.find('a').first().simulate('click',{ button: 0 })
        expect(history.location.pathname).toBe('/REGISTER')
    })
})