import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState(() => { return { monsters: users } }));
  }

  onSearchChange = (event) => {
    this.setState(() => { return { search: event.target.value.toLowerCase() } });
  }

  render() {
    const { monsters, search } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(search));
    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder="search monster" className="monster-search-box" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
