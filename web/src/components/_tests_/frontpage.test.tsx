import FrontPage from "../frontpage";
import Enzyme, {shallow,mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as React from "react";
describe('Component Search User', () => {
    beforeAll(async () => {
        Enzyme.configure({adapter: new Adapter()});
    })
    it('Testing Search_User rendering', () => {
        const wrapper = shallow(
            <FrontPage/>
        );
        console.log(wrapper)
    })
})