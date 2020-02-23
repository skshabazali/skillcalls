import React, {Component} from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Thumbnail,
  ListItem,
  List,
} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ThemeProvider } from 'react-native-paper';

export default class FooterItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carpenter: false,
      plumber: false,
      electrician: false,
      antipest: false,
      mechanic: false,
      cleaner: false,
   
    };
  }
  render() {
    return (
      <View
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{height: hp('15%')}}>
        <FooterTab style={{backgroundColor: '#ffffff', padding: 2}}>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 3,
              borderColor: '#000000',
              backgroundColor:this.props.active===this.props.item.text? 'yellow':"white",
              width: hp('10%'),
              borderStyle: 'solid',
            }}>
            <Button
              vertical
              transparent
              onPress={() => {
                this.props.onSelectServiceProvider(this.props.item.text);
                // {
                //   this.state.carpenter
                //     ? this.props.carp()
                //     : this.props.navigation.navigate('Carpenters');
                // }
              }}>
              <View style={{marginRight: hp('2.5%')}}>
                <Image style={styles.avatar} source={this.props.item.image} />
              </View>
              <View>
                <Text>{this.props.item.text}</Text>
              </View>
            </Button>
          </View>
        </FooterTab>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  avatar: {
    borderRadius: 75,
    borderWidth: 1,
    borderColor: '#000',
    width: 45,
    height: 45,
    marginLeft: hp('2.5%'),
    marginBottom: hp('2%'),
    backgroundColor: '#ffffff',
  },
});
