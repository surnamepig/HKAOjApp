import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Button, Alert} from 'react-native';


export default class LanguageSelect extends Component {
    langClick() {
        Alert.alert('语言切换开发中');
    }

    render() {
        return (
            <View style={styles.langView}>
                <View style={styles.langBtn}>
                    <Button onPress={this.langClick} style={styles.langBtn} title="简体中文" color="#c22e2c"/>
                </View>
                <View style={styles.langBtn}>
                    <Button onPress={this.langClick} title="繁体中文" color="#c22e2c"/>
                </View>
                <View style={styles.langBtn}>
                    <Button onPress={this.langClick} title="English" color="#c22e2c"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    langView: {
        paddingVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e7e7e7',
        backgroundColor: '#ffffff'
    },
    langBtn: {
        marginHorizontal: 10
    }
});