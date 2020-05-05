import {gql} from "apollo-boost"
const REGISTER_USER=gql`
mutation Register($type:inputRegister!)
{
registerUser(type:$type)
}
`;
const FILTER_USER=gql`
query Filter($name:String!)
{
filterUser(name:$name)
{
name
lastname
password
}
}
`
export {
    FILTER_USER,
    REGISTER_USER
}