//@packages
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

// @scripts
import CtrlForm from '../components/Form';
import NotesContext from '../context/NotesContext'

const CreateScreen = ({ navigation }) => {
    const [state, setState] = useState({
        content: '',
        title: ''
    })

    const notesContext = useContext(NotesContext);

    const { createNote } = notesContext;

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

        createNote({
            id: Math.floor(Math.random() * 99999),
            content,
            title
        });

        navigation.navigate('Index')
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

CreateScreen.navigationOptions = () => {
    return {
        headerStyle: {
            backgroundColor: '#6004EE'
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        title: 'Crear nota',
    }
};

CreateScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default CreateScreen;