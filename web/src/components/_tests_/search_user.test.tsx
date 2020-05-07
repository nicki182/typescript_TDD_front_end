import Enzyme, {mount, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import * as React from "react"
import Search_User from "../search_user";
import configureStore from 'redux-mock-store'
import { MockedProvider } from '@apollo/react-testing';
const wait = require('waait');
import {FILTER_USER} from "../graphql/resolvers";
import {SetStateAction, useState, useState as useStateMock} from "react";
import {init} from "http-proxy-middleware/dist/handlers";
import {act} from "react-dom/test-utils";
describe('Component Search User', () => {
        beforeAll(async () => {
            Enzyme.configure({adapter: new Adapter()});
        })
        it('Testing Search_User rendering', () => {
            const setHookState = (newState: {}) => jest.fn().mockImplementation((state: {}) => [
                newState,
                (newState: {}) => {}
            ])
            const wrapper = mount(
                    <Search_User UsersUpdate={setHookState}/>
            );
            expect(wrapper.find('button')).toHaveLength(1)
            expect(wrapper.find('input')).toHaveLength(1)
        }),
        it('testing response in query', async () => {
            const mocks = [
                {
                    request: {
                        query: FILTER_USER,
                        variables: {
                            name: 'fd',
                        },
                    },
                    result: {
                        data: {
                            filterUser: [{name: 'fd', lastname: '', password: ''}, {name: 'fd', lastname: '', password: ''}]
                        },
                    },
                },
            ];
            const setHookState = (newState: {}) => jest.fn().mockImplementation((state: {}) => [
                newState,
                (newState: {}) => {}
            ])
            const wrapper = mount(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Search_User UsersUpdate={setHookState}/>
                </MockedProvider>
            )
                await wait(0);
        })
    })