import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverviewScreen';
MealsOverViewScreen


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Categories' component={CategoriesScreen}/>
          <Stack.Screen name='Overview' component={MealsOverViewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

