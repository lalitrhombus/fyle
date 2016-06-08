import { FETCH_BANK } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_BANK:
            return action.payload.data;
    }
    return state;
}