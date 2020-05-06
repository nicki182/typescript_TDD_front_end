import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MockedProvider} from "@apollo/react-testing";
import Table from "../table";
import React from "react";
describe('Component Table', () => {
    beforeAll(async () => {
        Enzyme.configure({adapter: new Adapter()});
    })
    it('Render Table', () => {
        const wrapper = mount(
            <Table users={[{name:'',lastname:'',password:''}]}/>
        );
        expect(wrapper.find('td')).toHaveLength(3)
    })
})