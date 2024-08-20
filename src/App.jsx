import { useCallback, useMemo, useState } from "react";
import { UserList } from "./components/UserList";

const users = [
  {
    id: 1,
    name: "Hermione",
  },
  {
    id: 2,
    name: "Harry",
  },
  {
    id: 3,
    name: "Ron",
  },
  {
    id: 4,
    name: "Ginny",
  },
  {
    id: 5,
    name: "Neville",
  },
];
function App() {
  const [filter, setFilter] = useState("");
  const filterUsers = useCallback((filter) => {
    if (filter.length !== 0) {
      const filteredArray = users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredArray;
    }
    return users;
  }, []);
  const filteredArray = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  );
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList userArray={filteredArray} />
    </div>
  );
}

export default App;
