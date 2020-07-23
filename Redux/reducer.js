import { combineReducers } from 'redux'

import { UPDATE_CONTACT, UPDATE_USER } from './action'

const contactReducer = (state = [], action) => {
    if (action.type === UPDATE_CONTACT) {
        return (
            [...state, action.payload]
        )
    }
    return state

} 

const userReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_USER:
            return ({
                ...state, ...action.payload,
            })
        case UPDATE_CONTACT:
            return ({
                ...state,
                ...{prevContact: action.payload}
            })
        default:
            return state
    }
}
/*
const reducer = (state, action) => {
   switch(action.type) {
       case UPDATE_USER:
           return ({
               ...state,
               user: userReducer(state.user, action.payload)
           })
        case UPDATE_CONTACT:
            return({
                ...state,
                contacts: contactReducer(state.contacts, action.payload)
            })
        default:
            return state
   }
}*/

export default reducer = combineReducers({
    user: userReducer,
    contacts: contactReducer,
})

//store.dispatch(updateUser({foo:'foo}))
//store.dispatch(addContact({name: 'a', phone: '1234567890'}))
//const store = new Store(reducer, state)