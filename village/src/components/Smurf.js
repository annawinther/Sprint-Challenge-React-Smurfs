import React from 'react';
// import Axios from 'axios';


// const smurfApi = 'http://localhost:3333/smurfs'

const Smurf = props => {

  // deleteSmurf = (id) => {
  //   event.preventDefault();
  //   Axios
  //   .delete(`${smurfApi}/${id}`)
  //   .then(response => {
  //     this.SVGElementInstanceList({ smurfs: response.data });
  //     window.location.reload;
  //   })
  // }
  return (
    <div className="Smurf">
      <h3> Name: {props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

