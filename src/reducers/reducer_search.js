import { SEARCH_BANK } from '../actions/index';

export default function(state = null, action) {
    switch (action.type) {
        case SEARCH_BANK:
            return action.payload;
    }
    return state;
}