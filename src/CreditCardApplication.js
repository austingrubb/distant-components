import React, { Component } from 'react';
import { connect } from "react-redux";
import {Apply} from './ducks/reducer'
// import reducer from './ducks/reducer'

class CreditCardApplication extends Component {
  constructor() {
    super();
    this.state = {
      isCreditCardHolder: false
    };

    // this.updateLoginName = this.updateLoginName.bind(this);
  }
  render() {
    const { loggedInAs, isCreditCardHolder, Apply } = this.props;

    return (
      <div className="credit-card-application">
        {!loggedInAs && "Must log in first"}
        {loggedInAs && <div>
          {!isCreditCardHolder && <div>
            <p>Hi {loggedInAs}, apply now!</p>
            <p><button className="button" onClick={() => Apply()}>Yes, sign me up! </button></p>
          </div>}
          {isCreditCardHolder && "Thanks for signing up!"}
        </div>}
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    loggedInAs: state.loggedInAs,
    isCreditCardHolder: state.isCreditCardHolder
  }
}

const mapDispatchToProps = {
  Apply
}


export default connect(mapStateToProps, mapDispatchToProps)(CreditCardApplication)
