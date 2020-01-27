//import liraries
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  PermissionsAndroid,
  TouchableOpacity,
  Alert,
  BackHandler,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import image from '../../Assets/spicon.png';
import PopupDialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  DialogFooter,
} from 'react-native-popup-dialog';
import ImagePicker from 'react-native-image-crop-picker';
import table from '../../Assets/table.jpg';
import chair from '../../Assets/chair.jpg';
import door from '../../Assets/door.jpg';
import {DrawerActions, StackActions} from 'react-navigation';
import HandleBack from '../../component/HandleBack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Container, Content, Button, Fab, Icon} from 'native-base';
import Headers from '../../component/HeaderComponent';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Drawer from 'react-native-drawer';
import Sidebar from '../Home/Sidebar';
import Modal, {ModalTitle} from 'react-native-modal';
import FooterComponent from '../../component/FooterComponet';

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Example App',
        message: 'Example App access to your location ',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('location permission denied');
      alert('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }

  // try {
  //   const granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.LOCATION,
  //     {
  //       title: 'Permission for location',
  //       message:
  //         'Access Location',
  //       buttonNeutral: 'Ask Me Later',
  //       buttonNegative: 'Cancel',
  //       buttonPositive: 'OK',
  //     },
  //   );
  //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //     console.log('You can use the location');
  //   } else {
  //     console.log('Location permission denied');
  //   }
  // } catch (err) {
  //   console.warn(err);
  // }
}
let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const googleApiKey = 'AIzaSyADAcsvlxCT7vVDKLPhkOnJoflmlCy5jio';
// create a component
class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: null,
      active: true,
      aboutUs: false,
      isModalVisible: false,
      clickedPosition: 1,
      isChairSelected: false,
      isTableSelected: false,
      isDoorSelected: false,
      uploadImageModal: false,
      onImageSelect: false,
      documentUploadModal: false,
      onTextSelect: false,
      conformBookingModal: false,
      imageModalVisible: false,
      selectedOption: '',
      image: [],
      uploadUrl: '',
      marker: [
        {
          latitude: 21.333,
          longitude: 86.8,
        },
        {latitude: 22.33, longitude: 83.4577},
        {latitude: 20.33, longitude: 84.4577},
        {latitude: 19.33, longitude: 85.6577},
      ],
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      isDrawerOpen: false,
      // mapRegion: null,
      // lastLat: null,
      // lastLong: null,

      // region: {
      //   // eslint-disable-next-line no-undef
      //   latitude: LATITUDE,
      //   longitude: LONGITUDE,
      //   latitudeDelta: LATITUDE_DELTA,
      //   longitudeDelta: LONGITUDE_DELTA,
      // },
      // marker: {
      //   latlng: {
      //     latitude: null,
      //     longitude: null,
      //     latitudeDelta: LATITUDE_DELTA,
      //     longitudeDelta: LONGITUDE_DELTA,
      //   },
      // },
    };
  }
  onBack = () => {
    const {clickedPosition} = this.state;
    if (clickedPosition === 1 && this.props.navigation.isFocused()) {
      Alert.alert(
        'Exit Application',
        'Do you want to quit application?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        {
          cancelable: false,
        },
      );
    }
  };
  getInitialState() {
    return {
      region: {
        latitude: 20.33,
        longitude: 85.8,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  async componentDidMount() {
    await requestLocationPermission();
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
      },

      error => console.log(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10,
      },
    );
    console.log('position', this.state.region);
    this.watchID = Geolocation.watchPosition(position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      });
    });

    // this.getLocationDetails(
    //   this.state.region.latitude,
    //   this.state.region.longitude,
    // );
  }

  // getLocationDetails(latitude, longitude) {
  //   const location = [];
  //   var url =
  //     'https://maps.googleapis.com/maps/api/geocode/json?address=' +
  //     latitude +
  //     ',' +
  //     longitude +
  //     '&key=' +
  //     googleApiKey;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       location = responseJson;
  //       console.log('location', url);
  //       location.results[0].address_components.forEach(component => {
  //         if (component.types.indexOf('country') !== -1) {
  //           this.setState({country: component.long_name});
  //         }
  //       });
  //     });
  // }
  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong,
    });
  }
  componentWillUnmount() {
    Geolocation.clearWatch(this.watchID);
  }
  closeDrawer() {
    this.setState({isDrawerOpen: false});
  }
  openDrawer() {
    this.drawer._root.open();
  }
  toggleDrawerMenu = () => {
    this.setState({isDrawerOpen: true});
  };
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
    console.log('upload', this.state.uploadImageModal);
  };
  toggleAbout = () => {
    this.setState({aboutUs: true});
  };
  toggleUploadImageModal = () => {
    this.setState({uploadImageModal: true});
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  toggleDocumentUploadModal = () => {
    this.setState({documentUploadModal: true});
    this.setState({uploadImageModal: !this.state.uploadImageModal});
  };
  toggleConformBookingModal = () => {
    this.setState({conformBookingModal: true});
    this.setState({documentUploadModal: !this.state.documentUploadModal});
  };
  getLocation = () => {
    Geocoder.init('AIzaSyADAcsvlxCT7vVDKLPhkOnJoflmlCy5jio');
    Geocoder.getFromLatLng(20.33, 85.8)
      .then(json => {
        var addressComponent = json.results[0].address_components[0];
        console.log('address', addressComponent);
      })
      .catch(error => console.warn(error));
  };
  handlePress = e => {
    this.setState({
      marker: [
        ...this.state.marker,
        {
          coordinate: e.nativeEvent.coordinate,
        },
      ],
    });
  };
  shootToast = message => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      25,
      50,
    );
  };
  selectPhoto(option, mediaType = 'photo') {
    this.setState({imageModalVisible: true});

    if (option === 'camera') {
      ImagePicker.openCamera({
        cropping: true,
        width: 500,
        height: 500,
        mediaType,
        compressImageMaxWidth: 640,
        compressImageMaxHeight: 480,
        freeStyleCropEnabled: true,
        includeExif: true,
      })
        .then(image => {
          // this.setState({showSpinner: true});
          this.setState({
            imageModalVisible: false,
            image: {
              uri: image.path,
              width: image.width,
              height: image.height,
              mime: image.mime,
            },
          });
          this.setState({
            uploadUrl: this.state.image.uri,
          });
          console.log('image', this.state.image);
          // uploadImage(image.path).then(url => {
          //   console.log('uploadUrl', url);
          //   this.setState({
          //     uploadUrl: url,
          //     showSpinner: false,
          //   });
          // });
          // this.storeUploadedData(item, image);
        })
        .catch(e => {
          console.log(e), this.setState({imageModalVisible: false});
        });

      console.log('camera');
    }
    if (option === 'gallery') {
      ImagePicker.openPicker({
        cropping: true,
        width: 300,
        height: 400,
        includeExif: true,
        freeStyleCropEnabled: true,
        avoidEmptySpaceAroundImage: true,
        mediaType,
      })
        .then(image => {
          this.setState({imageModalVisible: false});
          this.setState({showSpinner: true});
          this.setState({
            imageModalVisible: false,
            image: {
              uri: image.path,
              width: image.width,
              height: image.height,
              mime: image.mime,
            },
          });
          this.setState({
            uploadUrl: this.state.image.uri,
          });
          console.log('image', this.state.image);
          // uploadImage(image.path).then(url => {
          //   console.log('uploadUrl', url);
          //   this.setState({
          //     uploadUrl: url,
          //     showSpinner: false,
          //   });
          // });
        })
        .catch(e => console.log(e));
      console.log('gallery');
    }
  }

  // onMapPress(e) {
  //   alert('coordinates:' + JSON.stringify(e.nativeEvent.coordinate));
  //   this.setState({
  //     marker: [{coordinate: e.nativeEvent.coordinate}],
  //   });
  // }

  // onRegionChange(region) {
  //   // this.setState({region});
  // }
  render() {
    const {width, height} = Dimensions.get('window');
    const ratio = width / height;
    const coordinates = {
      latitude: 13.020548868353407,
      longitude: 79.14382378749997,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * ratio,
    };
    return (
      <HandleBack onBack={this.onBack}>
        <Drawer
          type="overlay"
          open={this.state.isDrawerOpen}
          content={
            <Sidebar
              navigation={this.props.navigation}
              about={this.toggleAbout}
            />
          }
          tapToClose={true}
          openDrawerOffset={0.3} // 20% gap on the right side of drawer
          closeDrawerOffset={0}
          styles={drawerStyles}
          tweenEasing={'easeInOutQuad'}
          onClose={() => {
            this.setState({isDrawerOpen: false});
          }}>
          <Container>
            <Headers
              navigation={this.props.navigation}
              toggleDrawer={this.toggleDrawerMenu}
            />

            <Content>
              <Fab
                style={{
                  position: 'absolute',
                  bottom: '350%',
                  backgroundColor: 'white',
                }}
                direction="Left"
                position="bottomRight">
                <Icon
                  style={{color: 'blue'}}
                  name="my-location"
                  type="MaterialIcons"
                />
              </Fab>

              <View>
                {/* <PopupDialog
                  // dialogStyle={{ position: "absolute", top: hp("8%") }}
                  visible={this.state.aboutUs}
                  dialogTitle={<DialogTitle title="About Us" />}
                  onTouchOutside={() => {
                    this.setState({aboutUs: false});
                  }}>
                  <DialogContent>
                    <Text style={{color: '#000000'}}>
                      SKILLCALLS.COM A/127,Sahid Nagar
                      Bhubneswar,Odisha,India(IN),PinCode:-751007
                    </Text>
                  </DialogContent>
                </PopupDialog> */}

                {/* // about modal */}

                <Modal
                  isVisible={this.state.aboutUs}
                  onBackButtonPress={() => {
                    this.setState({aboutUs: false});
                  }}
                  coverScreen={true}
                  transparent={true}
                  onTouchOutside={() => {
                    this.setState({aboutUs: false});
                  }}>
                  <View
                    style={{
                      backgroundColor: '#FFFFFF',
                      widht: wp('15%'),
                      height: hp('15%'),
                      borderRadius: 75,
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
                {/*
                // booking modal */}
                <Modal
                  isVisible={
                    this.state.isModalVisible ||
                    this.state.uploadImageModal ||
                    this.state.documentUploadModal ||
                    this.state.conformBookingModal
                  }
                  onBackButtonPress={() => {
                    this.setState({isModalVisible: false});
                    this.setState({isChairSelected: false});
                    this.setState({isTableSelected: false});
                    this.setState({isDoorSelected: false});
                    this.setState({uploadImageModal: false});
                    this.setState({documentUploadModal: false});
                    this.setState({conformBookingModal: false});
                  }}>
                  {this.state.isModalVisible ? (
                    <View
                      style={{
                        backgroundColor: '#FFFFFF',
                        widht: wp('27%'),
                        height: hp('27%'),
                        borderRadius: 15,
                        borderColor: 'white',
                        borderWidth: 5,
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            paddingLeft: 10,
                            color: 'black',
                            fontStyle: 'normal',
                            alignSelf: 'center',
                          }}>
                          Choose Your Problem Type
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          marginTop: 3,
                          borderWidth: 2,
                          borderColor: 'black',
                          justifyContent: 'space-evenly',
                          padding: 2,
                        }}>
                        <TouchableOpacity
                          style={{
                            flex: 0.3,
                            borderWidth: 1,
                            borderColor: 'black',
                            backgroundColor: this.state.isChairSelected
                              ? 'yellow'
                              : 'white',
                          }}
                          onPress={() => {
                            this.setState({
                              isChairSelected: !this.state.isChairSelected,
                            });
                          }}>
                          <View
                            style={{
                              paddingRight: hp('1%'),
                              paddingLeft: hp('1%'),
                              paddingTop: hp('1%'),
                            }}>
                            <Image
                              style={{width: hp('10%'), height: hp('10%')}}
                              source={chair}
                            />
                          </View>
                          <Text style={{fontSize: 15, marginLeft: hp('3%')}}>
                            Chair
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            flex: 0.3,
                            borderWidth: 1,
                            borderColor: 'black',
                            backgroundColor: this.state.isTableSelected
                              ? 'yellow'
                              : 'white',
                          }}
                          onPress={() => {
                            this.setState({
                              isTableSelected: !this.state.isTableSelected,
                            });
                          }}>
                          <View
                            style={{
                              paddingRight: hp('1%'),
                              paddingLeft: hp('1%'),
                              paddingTop: hp('1%'),
                            }}>
                            <Image
                              style={{width: hp('10%'), height: hp('10%')}}
                              source={table}
                            />
                          </View>
                          <Text style={{fontSize: 15, marginLeft: hp('3%')}}>
                            Table
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            flex: 0.3,
                            borderWidth: 1,
                            borderColor: 'black',
                            backgroundColor: this.state.isDoorSelected
                              ? 'yellow'
                              : 'white',
                          }}
                          onPress={() => {
                            this.setState({
                              isDoorSelected: !this.state.isDoorSelected,
                            });
                          }}>
                          <View
                            style={{
                              paddingRight: hp('1%'),
                              paddingLeft: hp('1%'),
                              paddingTop: hp('1%'),
                            }}>
                            <Image
                              style={{width: hp('10%'), height: hp('10%')}}
                              source={door}
                            />
                          </View>
                          <Text style={{fontSize: 15, marginLeft: hp('3%')}}>
                            Door
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <View style={{marginTop: hp('1%')}}>
                        {this.state.isChairSelected ||
                        this.state.isDoorSelected ||
                        this.state.isTableSelected ? (
                          <Button
                            style={{backgroundColor: 'black'}}
                            onPress={this.toggleUploadImageModal}>
                            <Text
                              style={{color: 'white', marginLeft: hp('20%')}}>
                              Next
                            </Text>
                          </Button>
                        ) : (
                          <Button
                            style={{backgroundColor: 'black'}}
                            onPress={this.toggleUploadImageModal}>
                            <Text
                              style={{color: 'white', marginLeft: hp('20%')}}>
                              Skip
                            </Text>
                          </Button>
                        )}
                      </View>
                    </View>
                  ) : null}

                  {/* //photoUploadModal */}

                  {this.state.uploadImageModal ? (
                    <View
                      style={{
                        backgroundColor: '#FFFFFF',
                        widht: wp('35%'),
                        height: hp('35%'),
                        borderRadius: 15,
                      }}>
                      <View style={{padding: hp('2%')}}>
                        <Text
                          style={{
                            fontSize: 15,
                            paddingLeft: 10,
                            color: 'black',
                            fontStyle: 'normal',
                            alignSelf: 'center',
                          }}>
                          You can upload the photo of your Problem
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          borderWidth: 1,
                          borderColor: 'black',
                          borderRadius: 15,
                          padding: hp('3%'),
                          width: hp('35%'),
                          height: hp('18%'),
                          marginLeft: hp('5%'),
                        }}
                        onPress={() => {
                          this.setState({
                            onImageSelect: true,
                            imageModalVisible: true,
                          });
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
                        {/* <Icon
                          name="camera-enhance"
                          type="MaterialIcons"
                          style={{
                            fontSize: 100,
                            color: '#E57373',
                            marginLeft: hp('8%'),
                            marginBottom: hp('4%'),
                          }} */}
                      </TouchableOpacity>
                      <View
                        style={{
                          paddingRight: hp('4%'),
                          paddingBottom: hp('4%'),
                          paddingLeft: hp('4%'),
                          paddingTop: hp('2%'),
                        }}>
                        {this.state.onImageSelect ? (
                          <Button
                            style={{
                              borderRadius: 15,
                              backgroundColor: 'black',
                            }}
                            onPress={this.toggleDocumentUploadModal}>
                            <Text
                              style={{marginLeft: hp('17%'), color: 'white'}}>
                              Next
                            </Text>
                          </Button>
                        ) : (
                          <Button
                            style={{
                              borderRadius: 15,
                              backgroundColor: 'black',
                            }}
                            onPress={this.toggleDocumentUploadModal}>
                            <Text
                              style={{marginLeft: hp('17%'), color: 'white'}}>
                              Skip
                            </Text>
                          </Button>
                        )}
                      </View>
                    </View>
                  ) : null}

                  {/* //documentUploadModal */}

                  {this.state.documentUploadModal ? (
                    <View
                      style={{
                        backgroundColor: '#FFFFFF',
                        widht: wp('35%'),
                        height: hp('65%'),
                        borderRadius: 15,
                      }}>
                      <View style={{padding: hp('2%')}}>
                        <Text
                          style={{
                            fontSize: 15,
                            paddingLeft: 10,
                            color: 'black',
                            fontStyle: 'normal',
                            alignSelf: 'center',
                          }}>
                          You can describe about your Problem
                        </Text>
                      </View>
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: 'black',
                          borderRadius: 15,
                          marginLeft: hp('3%'),
                          marginRight: hp('3%'),
                        }}>
                        <View
                          style={{
                            padding: hp('2%'),
                            height: hp('45%'),
                            widht: hp('35%'),
                          }}>
                          <TextInput
                            style={{
                              paddingLeft: 10,
                              borderBottomColor: 'black',
                              borderBottomWidth: 1,
                            }}
                            placeholder="Describe Your Problem"
                            multiline={true}
                            onChangeText={() => {
                              this.setState({
                                onTextSelect: true,
                              });
                            }}
                            // onBack={() => {
                            //   this.setState({onTextSelect: false});
                            // }}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          paddingRight: hp('4%'),
                          paddingTop: hp('2%'),
                          paddingLeft: hp('4%'),
                        }}>
                        {this.state.onTextSelect ? (
                          <Button
                            style={{
                              borderRadius: 15,
                              backgroundColor: 'black',
                            }}
                            onPress={this.toggleConformBookingModal}>
                            <Text
                              style={{marginLeft: hp('17%'), color: 'white'}}>
                              Next
                            </Text>
                          </Button>
                        ) : (
                          <Button
                            style={{
                              borderRadius: 15,
                              backgroundColor: 'black',
                            }}
                            onPress={this.toggleConformBookingModal}>
                            <Text
                              style={{marginLeft: hp('17%'), color: 'white'}}>
                              Skip
                            </Text>
                          </Button>
                        )}
                      </View>
                    </View>
                  ) : null}
                  {/* //Confirm Booking */}
                  {this.state.conformBookingModal ? (
                    <View
                      style={{
                        backgroundColor: '#FFFFFF',
                        widht: wp('35%'),
                        height: hp('35%'),
                        borderRadius: 15,
                      }}>
                      <View style={{padding: hp('2%')}}>
                        <Text
                          style={{
                            fontSize: 20,
                            paddingLeft: 10,
                            color: 'black',
                            fontStyle: 'normal',
                            alignSelf: 'center',
                          }}>
                          CONFIRM BOOKING
                        </Text>
                      </View>
                      <View
                        style={{
                          alignSelf: 'center',
                          marginTop: hp('1%'),
                        }}>
                        <View
                          style={{
                            alignSelf: 'center',
                            marginTop: hp('1%'),
                          }}>
                          <Image
                            style={{
                              width: hp('10%'),
                              height: hp('10%'),
                              borderWidth: 1,
                              borderColor: 'grey',
                              borderRadius: 75,
                            }}
                            source={image}
                          />
                        </View>
                        <Text style={{color: 'black', fontWeight: 'bold'}}>
                          Min Charge : Rs 500/-
                        </Text>
                        <Text style={{color: 'black', fontWeight: 'bold'}}>
                          15mins Away From You
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingRight: hp('2%'),
                          paddingBottom: hp('2%'),
                          paddingLeft: hp('2%'),
                          paddingTop: hp('2%'),
                          flex: 1,
                          flexDirection: 'row',
                        }}>
                        <View style={{flex: 0.5}}>
                          <Button
                            style={{
                              borderRadius: 15,
                              backgroundColor: 'white',
                              borderColor: 'black',
                              borderWidth: 1,
                            }}
                            onPress={() => {
                              this.shootToast('Booking in process');
                            }}>
                            <Text
                              style={{marginLeft: hp('3%'), color: 'black'}}>
                              REQUEST BOOKING
                            </Text>
                          </Button>
                        </View>
                        <View style={{flex: 0.5}}>
                          <Button
                            style={{
                              borderRadius: 15,
                              backgroundColor: 'black',
                            }}
                            onPress={() => {
                              this.setState({conformBookingModal: false});
                            }}>
                            <Text
                              style={{marginLeft: hp('7%'), color: 'white'}}>
                              CANCEL
                            </Text>
                          </Button>
                        </View>
                      </View>
                    </View>
                  ) : null}
                </Modal>

                {/* <Modal>
                  <View
                    style={{
                      backgroundColor: '#FFFFFF',
                      widht: wp('15%'),
                      height: hp('15%'),
                      borderRadius: 75,
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
                  ) :
                </Modal> */}
                {/* //modal upload */}

                {/* <Modal
                  isVisible={this.state.uploadImageModal}
                  onBackButtonPress={() => {
                    this.setState({uploadImageModal: false});
                  }}
                  coverScreen={true}
                  transparent={true}
                  onTouchOutside={() => {
                    this.setState({uploadImageModal: false});
                  }}

                </Modal> */}

                <MapView
                  ref="map"
                  region={this.state.region}
                  //provider={this.props.provider}
                  style={styles.map}
                  // onPress={this.handlePress}
                  provider={PROVIDER_GOOGLE}
                  mapType="standard"
                  zoomEnabled={true}
                  pitchEnabled={true}
                  showsUserLocation={true}
                  followsUserLocation={true}
                  showsCompass={true}
                  showsBuildings={true}
                  showsTraffic={true}
                  showsIndoors={true}
                  //onRegionChange={region => this.setState({region})}
                >
                  {this.state.marker.map(marker => {
                    return (
                      <Marker
                        coordinate={{
                          latitude: this.state.region.latitude,
                          longitude: this.state.region.longitude,
                        }}
                        title={'Trident'}
                        description={'college'}>
                        <Text>{`Latitude ${this.state.region.latitude}
          Longitude ${this.state.region.longitude}`}</Text>
                      </Marker>
                    );
                  })}
                </MapView>
              </View>
            </Content>
            <View>
              <FooterComponent
                navigation={this.props.navigation}
                modal={this.toggleModal}
                about={this.toggleAbout}
              />
            </View>

            {/* <View style={{ marginBottom: hp("2%") }}>
                    <TouchableOpacity
                      style={styles.buttonStyle}


                    >

                      <Text
                        style={{
                          fontSize: 20,
                          color: "#FFFFFF",
                          marginLeft: hp("21%"),

                          marginBottom: wp("2.5%"),
                        }}
                      >

                        Book Now

                        </Text>

                    </TouchableOpacity>

                  </View> */}
          </Container>
        </Drawer>
      </HandleBack>
    );
  }
}

// define your styles
// const drawerStyles = {
//     drawer: { shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 3 },
//     //main: {paddingLeft: 3}
//   };
const drawerStyles = {
  drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  //main: {paddingLeft: 3}
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#ffffff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttonStyle: {
    marginTop: hp('2%'),
    height: hp('7%'),
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp('90%'),
    backgroundColor: '#000000',
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
    marginBottom:hp("2%")
  },
});

//make this component available to the app
export default HomeScreen;
