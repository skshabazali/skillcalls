//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slideshow from 'react-native-slideshow';

// create a component
class SlideShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          url:
            'https://image.shutterstock.com/image-photo/roofer-carpenter-working-on-roof-600w-748292161.jpg',
        },
        {
          url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaHC1KoxxVgDYqqjyu3NvdAGHbvFDMKP28owIB3f1VUPjEEd1c',
        },
        {
          url:
            'https://image.shutterstock.com/image-photo/close-tools-on-wooden-background-600w-1504584989.jpg',
        },
        {
          url:
            'https://www.autotrainingcentre.com/wp-content/uploads/2015/06/automotive-service-advisor.png',
        },
        {
          url:
            'https://hiring-assets.careerbuilder.com/media/attachments/careerbuilder-original-3580.jpg?1511294086',
        },
        {
          url:
            'https://www.careerfaqs.com.au/wp-content/uploads/2018/10/How_to_become_a_carpenter_612px.jpg',
        },
        {
          url:
            'https://image.shutterstock.com/image-photo/close-tools-on-wooden-background-600w-1504584989.jpg',
        },
        {
          url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHKKVfTFcErb1wn3PXYaIpmX2ZTGfDzQKZta2dVSKyJkI5RI37',
        },
        {
          url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeH61KhhwgsxHuYPGkcv9GyegfzArblqwEJgDuEIb5omHBuMY0',
        },
      ],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1,
        });
      }, 2000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <View style={styles.container}>
        <Slideshow
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({position})}
        />
      </View>
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
export default SlideShow;
