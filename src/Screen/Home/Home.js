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
} from 'react-native';
import PopupDialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  DialogFooter,
} from 'react-native-popup-dialog';
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
      clickedPosition: 1,
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
              about={this.state.aboutUs}
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
              <View>
                <PopupDialog
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
                </PopupDialog>
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
                  {/* <View style={{position: 'absolute', top: '50%'}}>
                  <Fab direction="left" position="bottomRight">
                    <Icon name="add" />
                  </Fab>
                </View> */}
                </MapView>
              </View>
            </Content>
            <View>
              <FooterComponent navigation={this.props.navigation} />
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
});

//make this component available to the app
export default HomeScreen;
