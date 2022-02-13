import React from 'react';

import {
  StyleSheet, Text, View} from 'react-native';

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './src/components/DrawerContent'

import {Home} from './src/pages/Home'
import {News} from './src/pages/News'
import {About} from './src/pages/About'
import {Contacts} from './src/pages/Contacts'

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
    drawerStyle: {
      width:'75%',
    },headerStyle: {
      backgroundColor: '#0F3F68',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center'
  }} initialRouteName="Home" drawerContent={props => <DrawerContent {...props } />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={News} />
        <Drawer.Screen name="Sobre" component={About} />
        <Drawer.Screen name="Contatos" component={Contacts} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default App;
