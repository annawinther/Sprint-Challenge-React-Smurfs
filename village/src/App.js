import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';


const smurfApi = 'http://localhost:3333/smurfs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      errorMessage: '',
      name: '',
      age: '',
      height: '',
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount(){
    this.getAllSmurfs();
  }

  getAllSmurfs = () => {
    axios
     .get(smurfApi)
     .then(response => {
       this.setState({ smurfs: response.data })
     })
     .catch(error => {
       this.setState({ errorMessage: error.message })
     } )
  }

  // saveSmurfData = (event) => {
  //   event.preventDefault();
  //   const { name, age, height } = this.state;
  //     const newSmurf = {
  //       name: this.state.name,
  //       age: this.state.age,
  //       height: this.state.height,
  //     };
  //     axios
  //       .get(smurfApi, newSmurf)
  //       .then(response => {
  //         this.setState({ 
  //           smurfs: response.data,
  //           name: '', 
  //           age: '',
  //           height: '',
  //           })
  //       });
  // }
  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  // handleSmurfData = (data) => {
  //   console.log(data, "data");
  //   this.setState(({ smurfs: data}))
  // }

  render() {
    // const { name, age, height } = this.state;
    return (
      <div className="App">
      <Route
        exacat
        path='/'
        render={props => 
          <Smurfs 
          {...props}
          smurfs={this.state.smurfs} 
          // handleSmurfData={this.handleSmurfData}
          />}
      />
        
     
        <SmurfForm 
          // name={name}
          // age={age}
          // height={height}
          // handleSmurfData={this.handleSmurfData}
          // saveSmurfData={this.saveSmurfData}
        />
        
      </div>
    );
  }
}

export default App;
