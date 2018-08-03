import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit =this.handleSubmit.bind(this);
  }

  handleInput(type){
    return (e => {
      this.setState({[type]: e.target.value});
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render (){
    if(this.props.currentUser) return <Redirect to="/"/>;

    const linkValue = this.props.formType === "Log In" ? (
      <Link to='/signup'>Sign Up</Link>
      ) : (
      <Link to='/login'>Login</Link>
      );

    return (
      <div>
        <h2>{this.props.formType}</h2>
        <form>
          <label>
            Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}>
            </input>
          </label>
          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}>
            </input>
          </label>
          <button onClick={this.handleSubmit}>{this.props.formType}
          </button>
        </form>
        {linkValue}
        <ul>
          {
          this.props.errors.map( (err, idx) => <li key={idx}>{err}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(SessionForm);
