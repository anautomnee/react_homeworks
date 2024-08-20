export const UserList = ({ userArray }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {userArray.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
