import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Notification extends Component {
    render() {
        return (
            <View style={styles.notiView}>
                <Text style={styles.notiText}>7项特别通告</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    notiView: {height: 35, backgroundColor: '#c22e2c', alignItems: 'center', justifyContent: 'center'},
    notiText: {alignSelf: 'center', color: '#ffffff'}
});