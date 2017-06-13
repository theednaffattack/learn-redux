import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testAction } from '../actions/actionCreators.js';

/**
 * export the dashboard page
 */
class Dashboard extends Component {

  /**
   * call the test action that we created
   */
  handleClickHello() {
    this.props.testAction();
    // console.log(this);
  }

  /**
   * render component to the screen
   * @returns { ReactElement }
   */
  render() {
    return (
      <div>
        <h4>This is the dashboard</h4>
        <a onClick={this.handleClickHello.bind(this)}>Knock Knock</a>
        <h3>{this.props.auth.message.name}</h3>

      </div>
    );
  }
}

/**
 * allows us to call our application state from props
 */
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

/**
 * exports our component and gives it access to the redux state
 */
export default connect(mapStateToProps, { testAction })(Dashboard);