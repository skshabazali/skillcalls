
import React, {Component} from 'react';
import {Text, View} from 'react-native';
export default class Help extends Component {
  static navigationOptions = {
    title: 'HELP',
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
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Help</Text>
        {/* <AirbnbRating />

        <AirbnbRating
          count={11}
          reviews={[
            'Terrible',
            'Bad',
            'Meh',
            'OK',
            'Good',
            'Hmm...',
            'Very Good',
            'Wow',
            'Amazing',
            'Unbelievable',
            'Jesus',
          ]}
          defaultRating={11}
          size={20}
        /> */}

    

        {/* <Rating
          type="heart"
          ratingCount={3}
          imageSize={60}
          showRating
          onFinishRating={this.ratingCompleted}
        /> */}

        {/* <Rating
          type="custom"
          ratingImage={WATER_IMAGE}
          ratingColor="#3498db"
          ratingBackgroundColor="#c8c7c8"
          ratingCount={10}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
          style={{paddingVertical: 10}}
        /> */}
      </View>
    );
  }
}
