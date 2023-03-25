import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const baseURL = "https://dummyjson.com/users";

function Home() {
  const [users, setUsers] = React.useState([]);

  const navigate = useNavigate();

  const handleLogout = () => {
    return navigate("/");
  };

  React.useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((res) => setUsers(res.users));
  }, []);

  if (!users) return null;

  return (
    <div>
      <nav className="navbar">
        <button className="logoutBtn" type="button" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Image</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col" style={{ minWidth: "160px" }}>
                Mobile number
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>
                  <img alt="profile" src={user.image} className="table-img" />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
