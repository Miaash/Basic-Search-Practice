import "./App.css";
import { Users } from "./users";

function App() {
  return (
    <div className="App">
      <div className="input">
        <input type="text" placeholder="Search..." className="search" />
      </div>
      <ul className="list">
        {Users.map((user) => (
          <li className="listItem">{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
