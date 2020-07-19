import {
    CREATE_NOTE,
    DELETE_NOTE,
    EDIT_NOTE
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case CREATE_NOTE:
            return [...state, action.payload];
        case DELETE_NOTE:
            return state.filter(note => note.id !== action.payload);
        case EDIT_NOTE:
            return state.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }

                return note;
            });
        default:
            return state;
    }
}