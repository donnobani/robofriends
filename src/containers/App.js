import React,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots'; // have to destructure bc not using default export
import Scroll from'../components/Scroll';
import './App.css';

//any component that has 'state' uses the class syntax in order to use constructor func
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
    }
    //arrow function used below bc of use of"this" in custom methods when working with react
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
        
    }
    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })
        return !robots.length?
            <h1>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f2' >RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
            </div>

        )
        
    }
}

export default App;