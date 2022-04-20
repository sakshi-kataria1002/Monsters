//Importing Child Components Search, CradList
import CardList from '../../components/card-list/card-list.component';
import Search from '../../components/search/search.component';

//App Styles
import './App.css'
import React from 'react'

//Parent Component
class App extends React.Component{
    /**Step 1 */
    constructor() {

        //{/**super constructor inheriting: this.state, this.setState properties*/}
        super() 
        this.state = { //object containg key and value
            users: [],
            searchValue: ''
        }
    }
    /**Step 4 */
    componentDidMount(){
        //fetch function takes API Calls for fetching the data
        fetch('https://jsonplaceholder.typicode.com/users') //It is a Promise Calling API function
        /** return result => result.json() => Array[] */
        .then(result => result.json()) //.then is chainable function json file in API
        /** return updated Aray[] => this.setState({users:monsters})-> updating the array*/
        .then(monsters => this.setState( //result.json() = monsters, it will fill the array, this.setState is updating the previous state
                {
                    users:monsters //filled array which is monsters
                }
            )
        )
    }
    //for Onchange Function in Search
    handleOnChange = (event) => {
        this.setState({searchValue: event.target.value})
    }

    /**Step 2 */
    render(){
        const {users, searchValue} = this.state
        const filteredMonsters = users.filter(
            monster => monster.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
        )
        /**Step 3 */
        return( //JS6-> React based DOM
        <div className = "App">
            <h1>Monsters Rollodex</h1>
            {/**Child Components */}
            <Search changing = {this.handleOnChange} />
            <CardList monsters={filteredMonsters} /> {/**filled array as monsters */}
        </div>
        )
    }
}

export default App