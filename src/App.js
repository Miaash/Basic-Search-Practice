import React, { useState } from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./users";

function App() {
  const [query, setQuery] = useState("");
  // console.log(
  //   Users.filter((user) => user.first_name.toLowerCase().includes("fe"))
  // );

  const keys = ["first_name", "last_name", "email"];
  // console.log(Users[0]["email"]);

  const search = (data) => {
    return data.filter((item) =>
      // item.first_name.toLowerCase().includes(query) ||
      // item.last_name.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query)
      // 여기서 some()메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트 boolean 반환
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="App">
      <div className="input">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Table data={search(Users)} />
      </div>
      {/* 기본 검색 기능 구현 */}
      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
