// import { connect } from "react-redux";

const initialState = {
    loggedInAs: "",
    isCreditCardHolder: false
};

const LOGGED_IN = 'LOGGED_IN'
const CARD_HOLDER = 'CARD_HOLDER'

export default function reducer (state = initialState, action ){
    const stateCopy = {...state};
    switch (action.type) {
        case LOGGED_IN:
            stateCopy.loggedInAs = action.payload
            return stateCopy;
        case CARD_HOLDER:
            console.log(action.payload)
            stateCopy.isCreditCardHolder = true
            return stateCopy;
        default:
        return state;
    }
};

export function login(name){
    return {
      type: LOGGED_IN,
      payload: name
    }
  }

export function Apply(){
    return {
      type: CARD_HOLDER,
    //   payload: !initialState.isCreditCardHolder
    }
}