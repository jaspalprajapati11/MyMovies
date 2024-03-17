import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MovieList from '../MovieList/MovieList';
import OneMovie from '../OneMovie/OneMovie';


const Stack = createStackNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="My Movies" component={MovieList} />
        <Stack.Screen name="Movie Detail" component={OneMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator