function ListCompRender() {
  // Fruits Data

  const fruits = ["Apple", "Banana", "Mango"];

  // User Data

  const users = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Arun" },
    { id: 3, name: "Riya" },
  ];

  return (
    <>
      {/*  Fruits List */}
      <h4>Fruits</h4>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      {/* User List */}

      <h4>Users</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ListCompRender;
