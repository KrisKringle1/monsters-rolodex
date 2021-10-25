import './App.css';
import { CardList } from './components/card-list/card-list';
import {Component} from "react"

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
        <input type="text" placeholder="search monsters" onChange={(e) => this.setState({searchTerm: e.target.value})}/>
        <CardList monsters={ filteredMonsters  } />


    </div>
    )
  }
}

export default App;
