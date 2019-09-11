import {createBottomTabNavigator,createAppContainer, createStackNavigator} from 'react-navigation';

import login from './screen/login';
import home from './screen/home';

const StackNavigator = createStackNavigator(
  {
    LOGIN:{ 
        screen: login,
        navigationOptions:{
            header: null
        }
    },
    HOME:{ 
        screen: home,
        navigationOptions:{
            header: null
        }
    }
  }
);
  
export default createAppContainer(StackNavigator);