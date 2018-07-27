import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list =
[
{
  title: 'React',
  url: 'https://facebook.github.io/react/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
},
{
  title: 'Redux',
  url: 'https://github.com/reactjs/redux',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
},

{
  title: "Bicycle Race",
},
];

const more = [
  {
    title: 'Hello',
    ObjectID: 3,
  }
]

function isSearched(searchTerm){
  return function(item){
    return item.title.toLowerCase().includes(searchTerm.toLowerCase())
  }
}

class App extends Component {

constructor(props){
  super(props);

  this.state = {
  list,
  searchTerm: '',

  };

  this.onSearchChange = this.onSearchChange.bind(this);

  this.onDismiss = this.onDismiss.bind(this);
}

onSearchChange(event){
this.setState({ searchTerm: event.target.value});
}

onDismiss(id){
  const isNotID = item => item.objectID != id;
  const updatedList = this.state.list.filter(isNotID);
  this.setState({list:updatedList});

}

  render()
  {
    return (
      <div className="App">
      <form>
      <input type="text"
      onChange={this.onSearchChange}/>
      </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>

            <ul>
          <li key="item.objectID">
          <span>
          <a href={item.url}> {item.title} </a>
          </span>
          <span>{item.author} </span>
          <span>{item.num_comments} </span>
          <span>{item.points} </span>
          <span>
          <button
          onClick={() => this.onDismiss(item.objectID)}
          type="button"
          >
          Dismiss
          </button>
          </span>
          </li>
          </ul>


        )}
        </div>
        )}


  }


export default App;
