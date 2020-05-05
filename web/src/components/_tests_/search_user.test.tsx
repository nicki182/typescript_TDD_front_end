import Enzyme, {mount, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import * as React from "react"
import Search_User from "../search_user";
import configureStore from 'redux-mock-store'
import { MockedProvider } from '@apollo/react-testing';
const wait = require('waait');
import {FILTER_USER} from "../graphql/resolvers";
describe('Component Search User', () => {
        beforeAll(async () => {
            Enzyme.configure({adapter: new Adapter()});
        })
        it('Testing Search_User rendering', () => {
            const middlewares = [{name:'',lastname:'',email:'',password:''}]
            interface users {
                users:[{name:string,lastname:string,password:string}]
            }
            const setUsers:(users:users) => users & { children?: React.ReactNode }=(props)=>{return props}
            const mockStore = configureStore(middlewares,setUsers)
            const wrapper = shallow(
                    <Search_User UsersUpdate={mockStore.dispatch}/>
            );
            expect(wrapper.find('button')).toHaveLength(1)
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
            const middlewares = [{name:'',lastname:'',email:'',password:''}]
            interface users {
                users:[{name:string,lastname:string,password:string}]
            }
            const setUsers:(users:users) => users & { children?: React.ReactNode }=(props)=>{return props}
            const mockStore = configureStore(middlewares,setUsers)
            const wrapper = shallow(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Search_User UsersUpdate={mockStore.dispatch}/>
                </MockedProvider>
            );
            await wait(0);
        })
    })