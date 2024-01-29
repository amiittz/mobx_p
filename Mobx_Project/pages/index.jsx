import AddUser from "../components/adduser";
import UsersList from "../components/userslist";
import UsersDataProviders from "../components/usersDataContext";

export default function App() {
 
  return (
    <>
      <UsersDataProviders>
        <AddUser />
        <UsersList />
      </UsersDataProviders>

    </>
  );
}
