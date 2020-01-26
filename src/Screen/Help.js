//import liraries
import React, {Component} from 'react';
import {Text, View, Button, Modal, StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export default class Help extends Component {
  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible: true});
  }

  closeModal() {
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.closeModal()}
          style={{
            height: heightPercentageToDP('5%'),
            width: heightPercentageToDP('5%'),
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Text>This is content inside of modal component</Text>
              <Button onPress={() => this.closeModal()} title="Close modal" />
            </View>
          </View>
        </Modal>
        <Button onPress={() => this.openModal()} title="Open modal" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  innerContainer: {
    alignItems: 'center',
  },
});

//make this component available to the app
