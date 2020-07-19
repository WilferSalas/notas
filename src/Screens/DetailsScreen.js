//@packages
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
    Divider,
    FAB,
    Paragraph,
    Surface,
    Title
} from 'react-native-paper';
import { StyleSheet } from 'react-native';

// @scripts
import NotesContext from '../context/NotesContext'

const DetailsScreen = ({ navigation }) => {
    const notesContext = useContext(NotesContext);

    const { notes } = notesContext;

    const note = notes
        .find(note => note.id === navigation.getParam('id'));

    return (
        <Surface style={styles.surface}>
            <Title style={styles.title}>{note.title}</Title>
            <Divider />
            <Paragraph style={styles.paragraph}>{note.content}</Paragraph>
            <FAB
                style={styles.fab}
                icon="lead-pencil"
                onPress={() => navigation.navigate('Edit', { id: note.id })}
            />
        </Surface>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    paragraph: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    surface: {
        height: '100%',
        width: '100%',
        elevation: 4,
    },
    title: {
        marginVertical: 20,
        textAlign: 'center'
    }
});

DetailsScreen.navigationOptions = () => {
    return {
        title: 'Detalles',
        headerStyle: {
            backgroundColor: '#6004EE'
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
};

DetailsScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default DetailsScreen;