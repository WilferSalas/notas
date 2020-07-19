// @packages
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// @scripts
import CreateNote from './src/Screens/CreateNote';
import DetailsScreen from './src/Screens/DetailsScreen';
import EditScreen from './src/Screens/EditScreen';
import IndexScreen from './src/Screens/IndexScreen';
import NotesState from './src/context/NotesState';

// @styles
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6004EE',
    accent: '#0000BA',
  },
};

const navigator = createStackNavigator({
  Create: CreateNote,
  Details: DetailsScreen,
  Edit: EditScreen,
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Notas'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <NotesState>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </NotesState>
  )
}