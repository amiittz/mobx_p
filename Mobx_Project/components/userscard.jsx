import { BigHead } from "@bigheads/core";

export default function UsersCard({user, setUser, isDisabled})
{

    return (<>
        <div style={{width: '100px'}}><BigHead {...user.head}/></div>
        <p>id <input disabled={true} value={user.id} onChange={(e) => setUser({...user, id:e.target.value}) } /> </p>
        <p>name <input disabled={isDisabled} value={user.name} onChange={(e) => setUser({...user, name:e.target.value}) }/> </p>
        <p>bio <input disabled={isDisabled} value={user.bio} onChange={(e) => setUser({...user, bio:e.target.value}) }/> </p>
    </>)
}