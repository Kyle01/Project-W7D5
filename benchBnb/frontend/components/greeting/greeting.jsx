import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = props => {
  const welcome = props.currentUser ? (
    <div>
      <p>Welcome {props.currentUser.username}</p>
      <button onClick={props.logout}>Log out</button>
    </div>
  ) : (
    <div>
    <Link to='/signup'>Sign Up</Link> <br/>
    <Link to='/login'>Login</Link>
    </div>
  );

  return welcome;
};

export default Greeting;
