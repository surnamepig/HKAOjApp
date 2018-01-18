import React, {Component} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

export default class HeaderToBack extends Component {
    constructor(props) {
        super(props);

        this.toBackPress = this.toBackPress.bind(this);
    }

    toBackPress() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.toBackPress} activeOpacity={0.6}>
                <Image style={styles.imageSize} source={require('../assets/images/backBtn.png')}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    imageSize: {width: 52, height: 26, marginLeft: 10}
});