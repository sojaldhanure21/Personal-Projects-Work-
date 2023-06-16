import React from 'react';
import { StyleSheet } from 'react-native';
import MainLayout from './src/MainLayout';
import FooterPage from './src/Components/Common/Footer';
import HeaderPage from './src/Components/Common/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchResults from './src/Components/Results/SearchResult';
import Details from './src/Pages/Details';
import { Provider } from 'react-redux';
import {store} from './src/Redux/store'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <HeaderPage />
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainLayout}
          />
          <Stack.Screen
            name="Results"
            component={SearchResults}
          />
          <Stack.Screen
          name="Details"
          component={Details}/>
        </Stack.Navigator>
        <FooterPage />
      </NavigationContainer>
      </Provider>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
