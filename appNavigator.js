import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Config from './src/config';
const AppNavigator = createStackNavigator(Config.navigation);
export default createAppContainer(AppNavigator);
