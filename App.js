import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Home from './src/app/screens/Home';
import History from './src/app/screens/History';
import Poll from './src/app/screens/Poll';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;

              switch (route.name) {
                case 'Home':
                  iconName = 'home';
                  break;
                case 'History':
                  iconName = 'history';
                  break;
                case 'Poll':
                  iconName = 'poll';
                  break;
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ed686e',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarStyle: {
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              paddingBottom: 3,
            }
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="History" component={History} />
          <Tab.Screen name="Poll" component={Poll} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
