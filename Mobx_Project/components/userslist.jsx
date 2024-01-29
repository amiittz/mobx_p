import { useContext } from "react";
import ShowUser from "./showuser";
import { UsersDataContext } from "./usersDataContext";

export default function UsersList()
{
    
    const {users} = useContext(UsersDataContext);


    return(<>

        <h4>Users</h4>

        {
            users.map((user)=><ShowUser user = {user} />)
        }

    </>)
}