//@packages
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

// @scripts
import CtrlForm from '../components/Form';
import NotesContext from '../context/NotesContext'

const EditScreen = ({ navigation }) => {
    const notesContext = useContext(NotesContext);

    const { notes, editNote } = notesContext;

    const note = notes
        .find(note => note.id === navigation.getParam('id'));

    const [state, setState] = useState({
        content: note.content,
        title: note.title
    })

    const handleOnChange = (text, name) => {
        setState({
            ...state,
            [name]: text
        });
    };

    const handleOnSave = () => {
        const {
            content,
            title
        } = state;

        editNote({
            id: navigation.getParam('id'),
            content,
            title
        });

        navigation.navigate('Details')
    }

    const {
        content,
        title
    } = state;

    return (
        <CtrlForm
            content={content}
            title={title}
            onChange={handleOnChange}
            onSave={handleOnSave}
        />
    );
};

EditScreen.navigationOptions = () => {
    return {
        title: 'Editar nota',
        headerStyle: {
            backgroundColor: '#6004EE'
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
};

EditScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default EditScreen;