import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="navigate" onPress={() => navigation.navigate('Next')} />
    </View>
  );
}

const NextScreen = () => {
  return (
    <View>
      <Text>Some Text</Text>
      <Button title="Navigate" />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Next" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
