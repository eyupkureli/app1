import * as ACTION_TYPES from "../actions/action_types";

//now set your initial state inside reducer, no need export, we will use initial state here.

const initialState = {
  stateprop1: false
};

//now create our reducer function, parameters are state and actions. We create it as a switch case,
//it takes action.types as a parameter inside switch, we will create according to type of action: action.type
//thanks to dot notation we access to type of action: action.type

const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      return {
        ...state,
        stateprop1: true,
      };
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateprop1: false,
      };

    default:
      return state;
  }
};

export default Reducer1;
