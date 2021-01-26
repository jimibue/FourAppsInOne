import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './Settings';
import Things from './Things';
import {View, Text} from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();
const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Things" component={Things} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
export default MainTabNavigator;
