//@packages
import React, { useContext } from 'react';
import {
    Divider,
    FAB,
    IconButton,
    List,
    Surface,
    TouchableRipple
} from 'react-native-paper';
import { StyleSheet } from 'react-native';

// @scripts
import NotesContext from '../context/NotesContext'

const IndexScreen = ({ navigation }) => {
    const notesContext = useContext(NotesContext);

    const { deleteNote, notes } = notesContext;

    return (
        <Surface style={styles.surface}>
            <List.Section>
                <List.Subheader style={styles.subheader}>Notas</List.Subheader>
                {notes.map((note, index) => (
                    <TouchableRipple
                        key={index}
                        onPress={() => navigation.navigate('Details', { id: note.id })}
                        rippleColor="rgba(0, 0, 0, .32)"
                    >
                        <>
                            <List.Item
                                left={() => <List.Icon color="#0000BA" icon="note" />}
                                right={() => <IconButton
                                    color="#B4341D"
                                    icon="delete"
                                    onPress={() => deleteNote(note.id)}
                                    size={27}
                                    style={styles.deleteIcon}
                                />}
                                style={styles.listItem}
                                title={note.title}
                            />
                            <Divider />
                        </>
                    </TouchableRipple>
                ))}
            </List.Section>
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => navigation.navigate('Create')}
            />
        </Surface>
    );
};

const styles = StyleSheet.create({
    deleteIcon: {
        marginTop: 5
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    listItem: {
        paddingLeft: 0
    },
    subheader: {
        padding: 8
    },
    surface: {
        height: '100%',
        width: '100%',
        elevation: 4,
    }
});

IndexScreen.navigationOptions = () => {
    return {
        title: 'Crea y guarda tus notas',
        headerStyle: {
            backgroundColor: '#6004EE'
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
};

export default IndexScreen;