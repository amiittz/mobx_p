import UsersCard from "./userscard";
import { useUsers, useUsersDispatch } from "./usersDataContext";

export default function ShowUser({ user }) {

    const {editID} = useUsers();
    const dispatch = useUsersDispatch();

  function setUser(user) {
    dispatch({ type: "edit", newUser: user });
  }

  return (
    <>
      <UsersCard user={user} isDisabled={user.id != editID} setUser={setUser} />
      {user.id != editID ? (
        <button
          onClick={() => dispatch({ type: "toggleEdit", editID: user.id })}
        >
          Edit
        </button>
      ) : (
        <button onClick={() => dispatch({ type: "toggleEdit", editID: -1 })}>
          Save
        </button>
      )}
      <button onClick={() => dispatch({ type: "delete", deleteID: user.id })}>
        Delete
      </button>
    </>
  );
}
