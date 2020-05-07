import Register from "../register";
import Enzyme, {mount, shallow, ShallowWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createMemoryHistory } from "history";
import { render,fireEvent } from '@testing-library/react';
import * as React from "react";
import { Router } from "react-router"
import {REGISTER_USER} from "../graphql/resolvers";
import { MockedProvider } from '@apollo/react-testing';
import wait from "waait";
import {act} from "react-dom/test-utils";

describe('Component Register', () => {
    beforeAll(async () => {
        Enzyme.configure({adapter: new Adapter()});
    })
    it('Tensting Rendering ', () => {
        const wrapper=mount(
            <MockedProvider>
            <Register/>
            </MockedProvider>
            )
        expect(wrapper.find('button')).toHaveLength(1)
        expect(wrapper.find('input').length).toEqual(5)
    })
    it('Testing Register input values', async () => {
            const wrapper = render(
                <MockedProvider>
                <Register />
                </MockedProvider>
                )
    const inputName=await wrapper.findByPlaceholderText('Name')
        fireEvent.change(inputName, { target: { value: 'dasd' } })
        const inputLastname=await wrapper.findByPlaceholderText('Lastname')
        fireEvent.change(inputLastname, { target: { value: 'dasd' } })
        const inputEmail=await wrapper.findByPlaceholderText('Email')
        fireEvent.change(inputEmail, { target: { value: 'deuho1@dhkfdsfd' } })
        const inputPassword=await wrapper.findByPlaceholderText('Password')
        fireEvent.change(inputPassword, { target: { value: '123456' } })
        const inputPasswordConfirm=await wrapper.findByPlaceholderText('Confirm Password')
        fireEvent.change(inputPasswordConfirm, { target: { value: '123456' } })
        expect(inputName.getAttribute('value')).toBe('dasd')
        expect(inputLastname.getAttribute('value')).toBe('dasd')
        expect(inputEmail.getAttribute('value')).toBe('deuho1@dhkfdsfd')
        expect(inputPassword.getAttribute('value')).toBe('123456')
        expect(inputPasswordConfirm.getAttribute('value')).toBe('123456')
    }),
        it('Testing incorrect inputs in Register',async ()=>{
            const history=createMemoryHistory()
            const wrapper = render(
                <MockedProvider mocks={[]} addTypename={false}>
                    <Router history={history}>
                        <Register />
                    </Router>
                </MockedProvider>
            )
            const inputName=await wrapper.findByPlaceholderText('Name')
            fireEvent.change(inputName, { target: { value: '111' } })
            const inputLastname=await wrapper.findByPlaceholderText('Lastname')
            fireEvent.change(inputLastname, { target: { value: '111' } })
            const inputEmail=await wrapper.findByPlaceholderText('Email')
            fireEvent.change(inputEmail, { target: { value: 'deuho' } })
            const inputPassword=await wrapper.findByPlaceholderText('Password')
            fireEvent.change(inputPassword, { target: { value: '123' } })
            const inputPasswordConfirm=await wrapper.findByPlaceholderText('Confirm Password')
            fireEvent.change(inputPasswordConfirm, { target: { value: '123456' } })
            const button=await wrapper.findByText('Send')
            window.alert = jest.fn(() => ({}))
            fireEvent.click(button)
            expect(history.location.pathname).toBe('/')
            expect(window.alert).toHaveBeenCalled()
        }),
        it('Testing register submit',async ()=>{
            const history=createMemoryHistory()
            const mocks = [
                {
                    request: {
                        query: REGISTER_USER,
                        variables: {type:{name:"dasd",lastname:"dasd",email:"deuho1@dhkfdsfd",password:"123456"}},
                    },
                    result: { data: {registerUser:"User registered successfully"} },
                },
            ];
            const wrapper = render(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Router history={history}>
                    <Register />
                    </Router>
                </MockedProvider>
            )
                await wait(0);
        })
})