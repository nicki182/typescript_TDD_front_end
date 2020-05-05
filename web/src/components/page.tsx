import React, {useState} from "react";
import Table from "./table";
import Search_User from './search_user'
function Page() {
    const [users,setUsers] =useState<[{name:string,lastname:string,password:string}]>([{name:'',lastname:'',password:''}])
    return (
        <div>
            <div>
                <Search_User UsersUpdate={setUsers}></Search_User>
            </div>
            <Table users={users}></Table>
        </div>
    )
}
export default Page