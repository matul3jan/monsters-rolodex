import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [search, setSearch] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    setFilteredMonsters(monsters.filter(m => m.name.toLowerCase().includes(search)));
  }, [monsters, search])

  const onSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monster"
        className="monster-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
