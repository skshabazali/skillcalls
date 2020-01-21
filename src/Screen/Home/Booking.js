//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Header, Left, Right, Icon, Body, Container, Content} from 'native-base';
import {Menu, Provider, Divider, Button} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
class Booking extends Component {
  static navigationOptions = {
    title: 'Bookings',
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
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  _openMenu = () => this.setState({visible: true});

  _closeMenu = () => this.setState({visible: false});
  render() {
    return (
      <Container>
        <Content>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Booking Page</Text>
          </View>
        </Content>
      </Container>
      // <Provider>
      //   <View
      //     style={{
      //       marginLeft: hp('15%'),
      //       flexDirection: 'row',
      //       justifyContent: 'center',
      //       flexWrap: 'wrap',
      //       marginTop: 50,
      //     }}>
      //     <Menu
      //       visible={this.state.visible}
      //       onDismiss={this._closeMenu}
      //       style={{width: hp('13%'), height: hp('5%')}}
      //       anchor={
      //         <TouchableOpacity onPress={this._openMenu}>
      //           <Icon
      //             name="ellipsis-v"
      //             type="FontAwesome"
      //             style={{fontSize: 25, color: '#000'}}
      //           />
      //         </TouchableOpacity>
      //       }>
      //       <Menu.Item
      //         onPress={() => {
      //           this.props.navigation.navigate('Settings');
      //         }}
      //         title="Settings"
      //       />
      //     </Menu>
      //   </View>
      // </Provider>
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
export default Booking;
