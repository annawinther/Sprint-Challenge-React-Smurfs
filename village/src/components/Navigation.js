import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <div>
          <Link to='./'>Home</Link>
        </div>
        <div>
          <Link to='./smurf-form'>Add Smurf</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
