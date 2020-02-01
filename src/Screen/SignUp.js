import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        format="DD-MM-YYYY"
        minDate="1900-12-01"
        maxDate="2100-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={date => {
          this.setState({date: date});
        }}
      />
    );
  }
}
// //import liraries
// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// // create a component
// class SignUpScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>SignUpScreen</Text>
//       </View>
//     );
//   }
// }

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

// //make this component available to the app
// export default SignUpScreen;
