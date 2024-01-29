import { useContext, useEffect, useState } from "react";
import UsersCard from "./userscard";
import { DispatchContext, UsersDataContext } from "./usersDataContext";
import { getRandomBighead } from "../utils/bigHeadDataRandomizer"
import { getDefaultBighead } from "../utils/bigHeadDataRandomizer"

import { BigHead } from "@bigheads/core";

export default function AddUser()
{
    const {userID} = useContext(UsersDataContext);
    const dispatch = useContext(DispatchContext);

    const [user, setUser] = useState({
        id: userID,
        name:"",
        bio:"",
        head: getDefaultBighead()
    });
    console.log(user.head)

    function newBighead(){
        setUser({
            ...user,
            head: getRandomBighead()
        });
    }


    return (<>
    <h4>Add User</h4>
        <UsersCard user={user} setUser={setUser} isDisabled={false}/>
        <button onClick={newBighead}>set bighead</button>
        <button onClick = {() => {dispatch({type: "add", user});
         setUser({
            ...user,
            id: userID + 1,
            name:"",
            bio:"",
        })
        }}>Add User</button>
        </>
    )
}