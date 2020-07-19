// @packages
import React, { useReducer } from 'react';

// @scripts
import NotesContext from './NotesContext';
import NotesReducer from './NotesReducer'

// @scripts
import {
    CREATE_NOTE,
    DELETE_NOTE,
    EDIT_NOTE
} from '../types';

const NotesState = ({ children }) => {
    const initialState = [];

    const [state, dispatch] = useReducer(NotesReducer, initialState);

    const createNote = note => {
        dispatch({
            type: CREATE_NOTE,
            payload: note
        });
    };

    const deleteNote = noteId => {
        dispatch({
            type: DELETE_NOTE,
            payload: noteId
        });
    };

    const editNote = note => {
        dispatch({
            type: EDIT_NOTE,
            payload: note
        });
    };

    return (
        <NotesContext.Provider
            value={{
                createNote,
                deleteNote,
                editNote,
                notes: state
            }}
        >
            {children}
        </NotesContext.Provider>
    );
};

export default NotesState;
