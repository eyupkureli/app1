import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import * as ACTIONS from "../store/actions/actions";
import Auth from "../utils/auth";
import { connect } from "react-redux";

class Container2 extends Component {
  render() {
    const user_text = "text 1";
    return (
      <div>
        <button onClick={() => console.log(this.props.is_authenticated)}>
          Profile
        </button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
        <button onClick={() => this.props.action_creator1()}>
          Dispatch Action Creator 1
        </button>
        <button onClick={() => this.props.action_creator2()}>
          Dispatch Action Creator 2
        </button>
        <button onClick={() => this.props.action_creator3(user_text)}>
          Dispatch Action Creator 3
        </button>
        {this.props.stateprop1 ? <h1>{this.props.user_text}</h1> : null}
      </div>
    );
  }
}

//we create two function at bottom and they allow us to use redux state with react.

//to read state: syntax is same for class/function based: state to props eslemesi
function mapStateToProps(state) {
  return {
    stateprop1: state.reducer1.stateprop1,
    user_text: state.user_reducer.user_text,
    user_profile: state.auth_reducer.profile,
    is_authenticated: state.auth_reducer.is_authenticated
  };
}

//to update state, action dispatch or action creator dispatch
function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS), //actions
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()), //action creator
    action_creator2: () => dispatch(ACTIONS.failure()),
    action_creator3: (text) => dispatch(ACTIONS.user_input(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container2);
