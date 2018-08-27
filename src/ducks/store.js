import {createStore} from 'redux';

const initialState = {
    loggedInAs: "austin",
    isCreditCardHolder: true
}

const reducer = state => state;

const store = createStore(reducer, initialState)

export default store;