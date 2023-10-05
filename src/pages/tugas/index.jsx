import React, { useState } from "react";
import "./index.css";

function NameList() {
  const names = ["Fariz", "Fahreza", "Zakia", "Bagas"];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNames, setFilteredNames] = useState(names);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredNames = names.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNames(filteredNames);
  };

  return (
    <div className="container">
      <h1 className="heading">Tugas Mod 4 Kel 20</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search names..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="name-list">
        {filteredNames.map((name, index) => (
          <li key={index} className="name-item">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;
