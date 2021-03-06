import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Settings1 = ({navigation}) => {
  return (
    <View>
      <Text>Settings Page 1</Text>
      <Button
        title="Go to Settings2"
        onPress={() => navigation.navigate('Settings2')}
      />
      <Button
        title="Go to Settings3"
        onPress={() => navigation.navigate('Settings3')}
      />
    </View>
  );
};

const Settings2 = ({navigation}) => {
  return (
    <View>
      <Text>Settings Page 2</Text>
      <Button
        title="Go to Settings1"
        onPress={() => navigation.navigate('Settings1')}
      />
      <Button
        title="Go to Settings3"
        onPress={() => navigation.navigate('Settings3')}
      />
    </View>
  );
};
const Settings3 = ({navigation}) => {
  return (
    <View>
      <Text>Settings Page 3</Text>
      <Button
        title="Go to Settings2"
        onPress={() => navigation.navigate('Settings2')}
      />
      <Button
        title="Go to Settings3"
        onPress={() => navigation.navigate('Settings3')}
      />
    </View>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings1" component={Settings1} />
      <Stack.Screen name="Settings2" component={Settings2} />
      <Stack.Screen name="Settings3" component={Settings3} />
    </Stack.Navigator>
  );
};

export default MyStack;
