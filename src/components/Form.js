//@packages
import React from 'react';
import PropTypes from 'prop-types';
import {
    FAB,
    Surface,
    TextInput
} from 'react-native-paper';
import { StyleSheet, TextInput as Input } from 'react-native';

const CtrlForm = ({
    content,
    onChange,
    onSave,
    title
}) => {
    return (
        <Surface style={styles.surface}>
           <TextInput
                label="Titulo"
                name='title'
                onChangeText={text => onChange(text, 'title')}
                placeholder="Agrega un titulo"
                style={styles.textInputTitle}
                value={title}
            />
            <Input
                multiline
                name='content'
                numberOfLines={100}
                onChangeText={text => onChange(text, 'content')}
                placeholder="Agrega contenido..."
                style={styles.textInputContent}
                value={content}
            />
            <FAB
                style={styles.fab}
                icon="content-save"
                onPress={onSave}
            />
        </Surface>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 50
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    surface: {
        elevation: 4,
        height: '100%',
        padding: 20,
        width: '100%'
    },
    textInputContent: {
        marginTop: 20,
        display: 'flex',
        flex: 1,
        textAlignVertical: 'top'
    },
    textInputTitle: {
        backgroundColor: 'white'
    }
});

CtrlForm.propTypes = {
    content: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default CtrlForm;