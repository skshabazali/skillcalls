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

export default class FooterItems extends Component {
  render() {
    return (
      <ScrollView
        key={this.props.key}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{height: hp('15%')}}>
        <FooterTab style={{backgroundColor: '#ffffff', padding: 2}}>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 3,
              borderColor: '#000000',
              backgroundColor: 'yellow',
              width: hp('10%'),
              borderStyle: 'solid',
            }}>
            <Button
              vertical
              transparent
              onPress={() => {
                // this.props.onSelectServiceProvider('Carpenter');
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
        );
      </ScrollView>
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
