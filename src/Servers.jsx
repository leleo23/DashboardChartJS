import React, { useState } from 'react';
import './Servers.css';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

function Servers() {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue('');
  };

  return (
    <body>
      <main className="maincontainer">
        <div className="caixaprincipal">
          <h2>Servers Empresa</h2>
          <div className="search-container">
            <button className="material-symbols-outlined">
              <SearchIcon />
            </button>
            <input
              id="searchInput"
              type="text"
              className="search-input"
              placeholder="Pesquisar"
              value={searchValue}
              onChange={handleInputChange}
            />
            <button
              id="clearButton"
              className="material-symbols-outlined"
              onClick={handleClearClick}
            >
              <ClearIcon />
            </button>
          </div>
        </div>
      </main>
    </body>
  );
}

export default Servers;
