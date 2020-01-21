import HomeScreen from './Screen/Home/Home';
import Booking from './Screen/Home/Booking';
import carpenter from './Screen/Home/Carpenter';
import Login from './Screen/Login';
import SignUpScreen from './Screen/SignUp';
import Setting from './Screen/Setting';
import SplashScreen from './Screen/SplashScreen';
import RegisterServiceProvider from './Screen/RegisterServiceProvider';
import LoginServiceProvider from './Screen/LoginAsServiceProvider';
import Help from './Screen/Help';

const Config = {
  navigation: {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
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
    Bookings: {
      screen: Booking,
    },
    HelpScreen: {
      screen: Help,
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
  },
};

export default Config;
