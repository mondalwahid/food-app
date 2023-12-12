import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import Home from './screens/Home';
import Additems from './screens/Additems';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen
            name="Home"
            options={{
              title: 'View',
            }}
            component={Home}
          />
          <Tab.Screen
            name="Settings"
            options={{
              title: 'Settings',
              headerTitleAlign: 'center',
            }}
            component={Additems}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
