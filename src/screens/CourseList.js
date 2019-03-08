import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, FlatList, View, RefreshControl, StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { coursesFetch } from '../actions';

import CourseDetail from './CourseDetail';

class CourseList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    cardWidth: PropTypes.bool,
  };

  state = {
    refreshing: false,
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.props.coursesFetch();
  }

  onRefresh = () => {
    this.setState({ refreshing: true }, () => this.forceUpdate());
    this.setState({ refreshing: false });
  };

  renderCourse = (course) => {
    const { cardWidth = false, navigation } = this.props;
    return <CourseDetail course={course} cardWidth={cardWidth} />;
  };

  renderFlatList() {
    const { cardWidth = false } = this.props;

    if (cardWidth) {
      console.log('if', cardWidth);
      return (
        <FlatList
          style={{ flexDirection: 'column' }}
          data={this.props.courses}
          renderItem={this.renderCourse}
          keyExtractor={(course, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      );
    }
    console.log('else', cardWidth);
    return (
      <FlatList
        style={{ flexDirection: 'column' }}
        data={this.props.courses}
        numColumns={2}
        renderItem={this.renderCourse}
        keyExtractor={(course, index) => index.toString()}
      />
    );
  }

  renderList() {
    // if (this.props.loading) {
    //     return (
    //         <Spinner size="large" />
    //     );
    // }

    return (
      <ScrollView
        style={{ flex: 1 }}
        horizontal={this.props.horizontal}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
        }
      >
        <StatusBar translucent={false} barStyle="light-content" />
        {this.renderFlatList()}
      </ScrollView>
    );
  }

  render() {
    return <View style={{ flex: 1 }}>{this.renderList()}</View>;
  }
}

const mapStateToProps = ({ courses }) => ({ courses });

export default connect(
  mapStateToProps,
  { coursesFetch },
)(CourseList);
