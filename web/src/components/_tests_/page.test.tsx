import Page from "../page";
import Enzyme, {mount, shallow, ShallowWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from '@testing-library/react';
import * as React from "react";
import {BrowserRouter} from "react-router-dom";

describe('Component Page', () => {
    beforeAll(async () => {
        Enzyme.configure({adapter: new Adapter()});
    })
    it('Render page', () => {
        const wrapper=mount(<Page/>)
        expect(wrapper.find('Table')).toHaveLength(1)
        expect(wrapper.find('Search_User')).toHaveLength(1)
    })
})