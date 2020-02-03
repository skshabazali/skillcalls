import HomeScreen from './src/Screen/Home/Home';
import Booking from './src/Screen/Home/Booking';
import carpenter from './src/Screen/Home/Carpenter';
import Login from './src/Screen/Login';
import SignUpScreen from './src/Screen/SignUp';
import Setting from './src/Screen/Setting';
import SplashScreen from './src/Screen/SplashScreen';
import RegisterServiceProvider from './src/Screen/RegisterServiceProvider';
import LoginServiceProvider from './src/Screen/LoginAsServiceProvider';
import AdditionalRegisterServiceProviderPage from './src/Screen/AdditionalRegisterServiceProviderPage';
import ServiceProviderHomePage from './src/Screen/Home/ServiceProviderHomePage';
import Help from './src/Screen/Help';
import {createStackNavigator} from 'react-navigation-stack'
import FACILITES from './src/Screen/Facilites';
import BOOKINGS from './src/Screen/ServiceProviderBooking';
import PROFILE from './src/Screen/ServiceProviderProfile';

const Config = {
  navigation: createStackNavigator({
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
    ServiceProviderHomePage:{
      screen:ServiceProviderHomePage,
      navigationOptions: {
        header: null,
      },},
    LoginScreen: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    ServiceProviderHomePage: {
      screen: ServiceProviderHomePage,
      navigationOptions: {
        header: null,
      },
    },
    // Bookings: {
    //   screen: Booking,
    // },
    HelpScreen: {
      screen: Help,
    },
    ServiceProviderFacilities: {
      screen: FACILITES,
    },
    ServiceProviderBooking: {
      screen: BOOKINGS,
    },
    ServiceProviderProfile: {
      screen: PROFILE,
    },
    Bookings: {
      screen: Booking,
    },
    AdditionalRegisterServiceProviderPage: {
      screen: AdditionalRegisterServiceProviderPage,
    },
    Carpenters: {
      screen: carpenter,
    },
    RegisterService: {
      screen: RegisterServiceProvider,
      navigationOptions: {
        header: null,
      },
    },
    LoginService: {
      screen: LoginServiceProvider,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        header: null,
      },
    },
    Settings: {
      screen: Setting,
    },
  })
};

export default Config;
