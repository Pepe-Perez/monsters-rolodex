import React from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox} from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState( { monsters: user } ) )
  }

  handleChange= e =>{
    this.setState({ searchField: e.target.value });
  }

  render(){

    const { monsters, searchField} = this.state;
    /* Equal than
      const monsters = this.state.monsters
      const searchField = this.state.searchField
    */

   const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox 
          placeholder="Search monster"
          handleChange={ this.handleChange }
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
