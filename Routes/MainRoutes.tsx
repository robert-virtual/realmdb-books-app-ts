import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CreateAuthor} from '../Pages/CreateAuthor';
import {Show} from '../Pages/Show';
import {MainPages} from './types';

interface Props {}

const Tab = createBottomTabNavigator<MainPages>();
const MainRoutes: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName = 'rocket';
            if (route.name === 'CreateAuthor') {
              iconName = 'user';
            }

            if (route.name === 'Show') {
              iconName = 'list-ul';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Show" component={Show} />
        <Tab.Screen name="CreateAuthor" component={CreateAuthor} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
