import React from "react";
interface Users {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    street: string;
  };
}

const NewUserPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
    // cache: "no-store",
  });
  const users: Users[] = await response.json();
  return (
    <div>
      <h1>NewUserPage</h1>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <li>{user.name}</li>
            {/* <li>{user.address.city}</li> */}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NewUserPage;
