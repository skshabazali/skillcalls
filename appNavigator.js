import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Config from './config';
import TopNavigator from './src/component/TopNavigator';
import ServiceProviderHomePage from './src/Screen/Home/ServiceProviderHomePage';
import Bookings from "./src/Screen/Home/Booking";
// const Main=createStackNavigator({
//     Confige:Config.navigation,
// })
const SwitchNavigation = createSwitchNavigator({
    Configs:Config.navigation,
    
})
const AppNavigator =  createAppContainer(Config.navigation);
export default AppNavigator;
