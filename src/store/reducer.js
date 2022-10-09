import {createStore, combineReducers} from 'redux'

let Data  = (state = [], action) => {
    switch(action.type){
        case 'ADD':
            return [... state, action.value]
        case 'REMOVE':
            return []
        default:
            return state
        }
        

}

let store = createStore
(combineReducers({
    Data: Data
}))

export {store}