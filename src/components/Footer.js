import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.footerView}>
                <View style={styles.footerRow}>
                    <Image style={styles.footerLogo} source={require('../assets/images/hklogo.png')}/>
                    <Text style={[styles.fontStyle, styles.footerLogoText]}>香港航空 HONGKONGAIRLINES</Text>
                </View>
                <View>
                    <Text style={styles.fontStyle}>Copyright©2018 HongKongAirlines Ltd</Text>
                </View>
                <View>
                    <Text style={styles.fontStyle}>粤ICP备12092660号</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footerView: {
        paddingVertical: 5,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#dcdcdc',
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        backgroundColor: '#ffffff'
    },
    footerRow: {alignItems: 'center', flexDirection: 'row'},
    footerLogo: {width: 20, height: 20, resizeMode: 'cover'},
    footerLogoText: {lineHeight: 20, fontWeight: 'bold'},
    fontStyle: {fontSize: 12, color: '#999999'}
});