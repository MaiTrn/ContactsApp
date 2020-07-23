import { createStore } from 'redux'

import reducer from './reducer'
import { addContact, updateUser } from './action'

export default store = createStore(reducer)

store.dispatch(addContact({name: 'Abigail', phone: '1234567890', key: 0}))
store.dispatch(addContact({name: 'John', phone: '2135675910', key: 1}))
store.dispatch(addContact({name: 'David', phone: '7867872393', key: 2}))