import './App.css';
import { CardList } from './components/card-list/card-list';
import {Component} from "react"
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  render(){
    const {searchTerm, monsters} = this.state
    
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm.toLowerCase()))
 
    return (
      <div className="App">
        <h1>Monsters Bolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={e => this.setState({searchTerm: e.target.value})}
        />
        <CardList monsters={ filteredMonsters  } />


    </div>
    )
  }
}

export default App;
