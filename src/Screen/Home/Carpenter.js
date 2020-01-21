//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class carpenter extends Component {
  static navigationOptions = {
    title: 'Carpenters',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#45425d',
    },
    headerTitleStyle: {
      fontWeight: '200',

      color: '#ffffff',

      fontFamily: 'Railway',

      fontSize: 18,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>carpenter</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default carpenter;
//import liraries
// import React, {Component} from 'react';
// import {View} from 'react-native';
// import {LoginButton, AccessToken} from 'react-native-fbsdk';

// export default class carpenter extends Component {
//   render() {
//     return (
//       <View>
//         <LoginButton
//           onLoginFinished={(error, result) => {
//             if (error) {
//               console.log('login has error: ' + result.error);
//             } else if (result.isCancelled) {
//               console.log('login is cancelled.');
//             } else {
//               AccessToken.getCurrentAccessToken().then(data => {
//                 console.log(data.accessToken.toString());
//               });
//             }
//           }}
//           onLogoutFinished={() => console.log('logout.')}
//         />
//       </View>
//     );
//   }
// }
