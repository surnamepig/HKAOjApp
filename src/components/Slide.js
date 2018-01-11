import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class Slide extends Component {
    render() {
        return (
            <View style={styles.slideView}>
                <Image style={styles.slideImage} source={require('../assets/images/slide1.jpg')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slideView: {height: 170},
    slideImage: {flex: 1, alignSelf: 'center', resizeMode: 'stretch'}
});