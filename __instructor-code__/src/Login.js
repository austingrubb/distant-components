import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: ''
    };

    this.updateLoginName = this.updateLoginName.bind(this);
  }

  updateLoginName(name) {
    this.setState({ loginName: name })
  }

  render() {
    // const { loggedInAs } = this.props;
    console.log('this.props', this.props)

    return (
      <div className="login">
        {!loggedInAs && <div>
          Log in as <input onChange={(e) => this.updateLoginName(e.target.value)} /> <button className="button"
          onClick={() => setLoggedInAs(this.state.loginName)}
          >Go</button>
        </div>}
        {loggedInAs && <div>
          Welcome, {loggedInAs}! {isCreditCardHolder && "(CC holder)"}
        </div>}
      </div>
    )
  }
};


const mapStateToProps = state => {
  return {
    x: 5
  }
}

export default connect(mapStateToProps)(Login);
