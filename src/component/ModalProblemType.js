// import React, {Component} from 'react';
// import {Text, View, Image, TouchableOpacity} from 'react-native';
// import Modal, {ModalTitle} from 'react-native-modal';
// import table from '../../Assets/table.jpg';
// import chair from '../../Assets/chair.jpg';
// import door from '../../Assets/door.jpg';
// import {Container, Content, Button, Fab, Icon} from 'native-base';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// export default class ModalProblemType extends Component {
//   render() {
//     return (
//       <Modal
//         isVisible={
//           this.state.isModalVisible
//           // //   this.state.uploadImageModal ||
//           // //   this.state.documentUploadModal ||
//           // //   this.state.conformBookingModal
//         }
//         onBackButtonPress={() => {
//           this.setState({isModalVisible: false});
//           this.setState({isChairSelected: false});
//           this.setState({isTableSelected: false});
//           this.setState({isDoorSelected: false});
//           //   this.setState({uploadImageModal: false});
//           //   this.setState({documentUploadModal: false});
//           //   this.setState({conformBookingModal: false});
//         }}>
//         {this.state.isModalVisible ? (
//           <View
//             style={{
//               backgroundColor: '#FFFFFF',
//               widht: wp('27%'),
//               height: hp('27%'),
//               borderRadius: 15,
//               borderColor: 'white',
//               borderWidth: 5,
//             }}>
//             <View>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   paddingLeft: 10,
//                   color: 'black',
//                   fontStyle: 'normal',
//                   alignSelf: 'center',
//                 }}>
//                 Choose Your Problem Type
//               </Text>
//             </View>
//             <View
//               style={{
//                 flex: 1,
//                 flexDirection: 'row',
//                 marginTop: 3,
//                 borderWidth: 2,
//                 borderColor: 'black',
//                 justifyContent: 'space-evenly',
//                 padding: 2,
//               }}>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.3,
//                   borderWidth: 1,
//                   borderColor: 'black',
//                   backgroundColor: this.state.isChairSelected
//                     ? 'yellow'
//                     : 'white',
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     isChairSelected: !this.state.isChairSelected,
//                   });
//                 }}>
//                 <View
//                   style={{
//                     paddingRight: hp('1%'),
//                     paddingLeft: hp('1%'),
//                     paddingTop: hp('1%'),
//                   }}>
//                   <Image
//                     style={{width: hp('10%'), height: hp('10%')}}
//                     source={chair}
//                   />
//                 </View>
//                 <Text style={{fontSize: 15, marginLeft: hp('3%')}}>Chair</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.3,
//                   borderWidth: 1,
//                   borderColor: 'black',
//                   backgroundColor: this.state.isTableSelected
//                     ? 'yellow'
//                     : 'white',
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     isTableSelected: !this.state.isTableSelected,
//                   });
//                 }}>
//                 <View
//                   style={{
//                     paddingRight: hp('1%'),
//                     paddingLeft: hp('1%'),
//                     paddingTop: hp('1%'),
//                   }}>
//                   <Image
//                     style={{width: hp('10%'), height: hp('10%')}}
//                     source={table}
//                   />
//                 </View>
//                 <Text style={{fontSize: 15, marginLeft: hp('3%')}}>Table</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.3,
//                   borderWidth: 1,
//                   borderColor: 'black',
//                   backgroundColor: this.state.isDoorSelected
//                     ? 'yellow'
//                     : 'white',
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     isDoorSelected: !this.state.isDoorSelected,
//                   });
//                 }}>
//                 <View
//                   style={{
//                     paddingRight: hp('1%'),
//                     paddingLeft: hp('1%'),
//                     paddingTop: hp('1%'),
//                   }}>
//                   <Image
//                     style={{width: hp('10%'), height: hp('10%')}}
//                     source={door}
//                   />
//                 </View>
//                 <Text style={{fontSize: 15, marginLeft: hp('3%')}}>Door</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={{marginTop: hp('1%')}}>
//               {this.state.isChairSelected ||
//               this.state.isDoorSelected ||
//               this.state.isTableSelected ? (
//                 <Button
//                   style={{backgroundColor: 'black'}}
//                   onPress={this.toggleUploadImageModal}>
//                   <Text style={{color: 'white', marginLeft: hp('20%')}}>
//                     Next
//                   </Text>
//                 </Button>
//               ) : (
//                 <Button
//                   style={{backgroundColor: 'black'}}
//                   onPress={this.toggleUploadImageModal}>
//                   <Text style={{color: 'white', marginLeft: hp('20%')}}>
//                     Skip
//                   </Text>
//                 </Button>
//               )}
//             </View>
//           </View>
//         ) : null}
//       </Modal>
//     );
//   }
// }
