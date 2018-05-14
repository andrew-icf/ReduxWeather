import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);  Do not manipulate or mutate state directly( .push() ), return a completely new instance of state
            return [ action.payload.data, ...state]; // 
            break;
        default:

    }
    console.log('Action Received ', action);
    return state;
}
