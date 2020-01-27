//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Header, Left, Right, Icon, Body, Container, Content} from 'native-base';
import {Menu, Provider, Divider, Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
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
      // visible: false,
      // imageModalVisible: false,
      // selectedOption: '',
      // image: [],
      // uploadUrl: '',
    };
  }
  // _openMenu = () => this.setState({visible: true});

  // _closeMenu = () => this.setState({visible: false});

  // selectPhoto(option, mediaType = 'photo') {
  //   this.setState({imageModalVisible: true});

  //   if (option === 'camera') {
  //     ImagePicker.openCamera({
  //       cropping: true,
  //       width: 500,
  //       height: 500,
  //       mediaType,
  //       compressImageMaxWidth: 640,
  //       compressImageMaxHeight: 480,
  //       freeStyleCropEnabled: true,
  //       includeExif: true,
  //     })
  //       .then(image => {
  //         // this.setState({showSpinner: true});
  //         this.setState({
  //           imageModalVisible: false,
  //           image: {
  //             uri: image.path,
  //             width: image.width,
  //             height: image.height,
  //             mime: image.mime,
  //           },
  //         });
  //         this.setState({
  //           uploadUrl: this.state.image.uri,
  //         });
  //         console.log('image', this.state.image);
  //         // uploadImage(image.path).then(url => {
  //         //   console.log('uploadUrl', url);
  //         //   this.setState({
  //         //     uploadUrl: url,
  //         //     showSpinner: false,
  //         //   });
  //         // });
  //         // this.storeUploadedData(item, image);
  //       })
  //       .catch(e => {
  //         console.log(e), this.setState({imageModalVisible: false});
  //       });

  //     console.log('camera');
  //   }
  //   if (option === 'gallery') {
  //     ImagePicker.openPicker({
  //       cropping: true,
  //       width: 300,
  //       height: 400,
  //       includeExif: true,
  //       freeStyleCropEnabled: true,
  //       avoidEmptySpaceAroundImage: true,
  //       mediaType,
  //     })
  //       .then(image => {
  //         this.setState({imageModalVisible: false});
  //         this.setState({showSpinner: true});
  //         this.setState({
  //           imageModalVisible: false,
  //           image: {
  //             uri: image.path,
  //             width: image.width,
  //             height: image.height,
  //             mime: image.mime,
  //           },
  //         });
  //         this.setState({
  //           uploadUrl: this.state.image.uri,
  //         });
  //         console.log('image', this.state.image);
  //         // uploadImage(image.path).then(url => {
  //         //   console.log('uploadUrl', url);
  //         //   this.setState({
  //         //     uploadUrl: url,
  //         //     showSpinner: false,
  //         //   });
  //         // });
  //       })
  //       .catch(e => console.log(e));
  //     console.log('gallery');
  //   }
  // }
  // pickSingle(cropit, circular = false, mediaType) {
  //   ImagePicker.openPicker({
  //     width: 500,
  //     height: 500,
  //     cropping: cropit,
  //     cropperCircleOverlay: circular,
  //     compressImageMaxWidth: 1000,
  //     compressImageMaxHeight: 1000,
  //     compressImageQuality: 1,
  //     compressVideoPreset: 'MediumQuality',
  //     includeExif: true,
  //   })
  //     .then(image => {
  //       console.log('received image', image);
  //       this.setState({
  //         image: {
  //           uri: image.path,
  //           width: image.width,
  //           height: image.height,
  //           mime: image.mime,
  //         },
  //         images: null,
  //       });
  //     })
  //     .catch(e => {
  //       console.log(e);
  //       Alert.alert(e.message ? e.message : e);
  //     });
  // }

  render() {
    return (
      <Container>
        <Content>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Booking</Text>
            {/* <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 15,
                padding: hp('3%'),
                width: hp('35%'),
                height: hp('18%'),
                marginLeft: hp('5%'),
                marginTop: hp('5%'),
              }}
              onPress={() => {
                this.setState({imageModalVisible: true});
              }}>
              <Modal
                isVisible={this.state.imageModalVisible}
                onBackButtonPress={() => {
                  this.setState({imageModalVisible: false});
                }}>
                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    widht: wp('15%'),
                    height: hp('20%'),
                    borderRadius: 2,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 25,
                        paddingLeft: 10,
                        fontFamily: 'railway',
                      }}>
                      Select a Photo
                    </Text>

                    <TouchableOpacity
                      style={{marginTop: 20}}
                      onPress={() => {
                        this.setState({
                          selectedOption: 'Camera',
                          imageModalVisible: false,
                        });
                        this.selectPhoto('camera');
                      }}>
                      <Text
                        style={{
                          paddingLeft: 11,
                          fontFamily: 'railway',
                          fontSize: 15,
                        }}>
                        Take a Photo...
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={{marginTop: 20}}
                      onPress={() => {
                        this.setState({
                          selectedOption: 'Gallery',
                          imageModalVisible: false,
                        });
                        this.selectPhoto('gallery');
                      }}>
                      <Text
                        style={{
                          paddingLeft: 11,
                          fontFamily: 'railway',
                          fontSize: 15,
                        }}>
                        Choose from Library...
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <View style={[styles.avatarContainerIcon]}>
                {!this.state.uploadUrl ? (
                  <Icon
                    name="camera-enhance"
                    type="MaterialIcons"
                    style={{fontSize: 100, color: '#E57373'}}
                  />
                ) : (
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: this.state.image.uri,
                    }}
                  />
                )}
              </View>
            </TouchableOpacity> */}
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
  avatar: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e6e6e6',
    width: hp('33%'),
    height: hp('14%'),
  },
  avatarContainerIcon: {
    //justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
});

//make this component available to the app
export default Booking;
