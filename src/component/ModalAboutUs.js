import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Modal, {ModalTitle} from 'react-native-modal';
import {Container, Content, Button, Fab, Icon} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class ModalAboutUs extends Component {
  render() {
    return (
      <Modal
        isVisible={this.props.about}
        onBackButtonPress={() => {
          this.props.setvalue();
        }}
        coverScreen={true}
        transparent={true}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            widht: wp('15%'),
            height: hp('15%'),
            borderRadius: 15,
          }}>
          <View>
            <Text
              style={{
                fontSize: 25,
                paddingLeft: 10,
                color: 'black',
                fontStyle: 'normal',
                alignSelf: 'center',
              }}>
              About Us
            </Text>
            <Text
              style={{
                paddingLeft: 11,
                marginTop: hp('2%'),

                fontSize: 15,
              }}>
              SKILLCALLS.COM A/127,Sahid Nagar
              Bhubneswar,Odisha,India(IN),PinCode:-751007
            </Text>
          </View>
        </View>
      </Modal>
    );
  }
}
