import { createContext } from "react";
import { useReducer } from "react";
import { useContext } from "react";


export const UsersDataContext = createContext(null);
export const DispatchContext = createContext(null);

export default function UsersDataProviders({ children }) {
  const [usersData, dispatch] = useReducer(usersDataReducer, {
    users: [],
    userID: 0,
    editID: -1,
  });

  return (
    <>
      <UsersDataContext.Provider value={usersData}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </UsersDataContext.Provider>
    </>
  );
}

export function useUsers()
{
    return useContext(UsersDataContext);
}

export function useUsersDispatch()
{
    return useContext(DispatchContext);
}

function usersDataReducer(usersData, action) {
  const { users, userID, editID } = usersData;

  switch (action.type) {
    case "add":
      const user = action.user;
      return { ...usersData, users: [...users, user], userID: userID + 1 };

    case "edit":
      const newUser = action.newUser;

      const editedUsers = users.map((user) => {
        if (user.id === newUser.id) {
          return newUser;
        }
        return user;
      });

      return { ...usersData, users: editedUsers };

    case "delete":
      const deleteID = action.deleteID;
      const fileteredUsers = users.filter((user) => user.id != deleteID);
      return { ...usersData, users: fileteredUsers };

    case "toggleEdit":
      const editID = action.editID;
      return { ...usersData, editID };
  }
}
