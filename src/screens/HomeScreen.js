import React, { Component } from 'react';
import {
  ScrollView, View, Text, Image, StatusBar,
} from 'react-native';

import { Swiper, styles } from '../components/Swiper';
import CourseList from './CourseList';
import { getToken } from '../config/LoginUtils';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Swiper>
          <View style={styles.screen1}>
            {/* <Text style={styles.text}>Screen 1</Text> */}
            <Image style={styles.imageStyle} source={require('../../assets/patent1.jpeg')} />
          </View>
          <View style={styles.screen2}>
            {/* <Text style={styles.text}>Screen 2</Text> */}
            <Image style={styles.imageStyle} source={require('../../assets/patent2.jpg')} />
          </View>
          <View style={styles.screen3}>
            {/* <Text style={styles.text}>Screen 3</Text> */}
            <Image style={styles.imageStyle} source={require('../../assets/patent3.jpg')} />
          </View>
        </Swiper>
        <Text style={styles.text}>Top Courses</Text>
        <ScrollView style={{ flex: 1 }}>
          <CourseList horizontal cardWidth />
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
