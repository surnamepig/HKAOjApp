import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, Image, ImageBackground, TouchableHighlight} from 'react-native';

import Notification from '../components/Notification';
import Slide from '../components/Slide';
import LanguageSelect from "../components/LanguageSelect";
import Footer from '../components/Footer';

export default class HomeScreen extends Component {
    static navigationOptions = (navigation) => ({
        headerTitle: (<View style={styles.headerTitleView}>
            <Image style={styles.headerTitleImage} source={require('../assets/images/hklogo.png')}/>
            <Text style={styles.headerTitleText}>香港航空</Text>
        </View>),
        headerLeft: (<View style={styles.headerLeft}></View>),
        headerRight: (<ImageBackground style={styles.headerRight}
                                       source={require('../assets/images/logoIco.png')}></ImageBackground>)
    });

    render() {
        return (
            <ScrollView>
                <Notification/>
                <Slide/>
                <View style={styles.menuBg}>
                    <View style={styles.btnMenuRow}>
                        <TouchableHighlight style={styles.menuBtn}>
                            <View style={styles.btnView}>
                                <Image style={styles.btnImage} source={require('../assets/images/jpydImg.png')}></Image>
                                <Text style={styles.btnText}>机票预定</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.menuBtn}>
                            <View style={styles.btnView}>
                                <Image style={styles.btnImage} source={require('../assets/images/npydImg.png')}></Image>
                                <Text style={styles.btnText}>年票预订</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.btnMenuRow}>
                        <TouchableHighlight style={styles.menuBtn}>
                            <View style={styles.btnView}>
                                <Image style={styles.btnImage} source={require('../assets/images/zjImg.png')}></Image>
                                <Text style={styles.btnText}>预办登机</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.menuBtn}>
                            <View style={styles.btnView}>
                                <Image style={styles.btnImage} source={require('../assets/images/hbdtImg.png')}></Image>
                                <Text style={styles.btnText}>航班动态</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.btnMenuRow}>
                        <TouchableHighlight style={styles.menuBtn}>
                            <View style={styles.btnView}>
                                <Image style={styles.btnImage}
                                       source={require('../assets/images/icon_home_jinpeng_red.png')}></Image>
                                <Text style={styles.btnText}>金鹏会员</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.menuBtn}>
                            <View style={styles.btnView}>
                                <Image style={styles.btnImage} source={require('../assets/images/userImg.png')}></Image>
                                <Text style={styles.btnText}>我的行程</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.btnMenuRow}>
                        <TouchableHighlight style={styles.menuBtn}>
                            <View style={styles.btnView}>
                                <Image style={styles.btnImage} source={require('../assets/images/ghzxImg.png')}></Image>
                                <Text style={styles.btnText}>港航资讯</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.menuBtn}>
                            <View style={styles.btnView}>
                                <Image style={styles.btnImage} source={require('../assets/images/setImg.png')}></Image>
                                <Text style={styles.btnText}>设置</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <LanguageSelect/>
                <Footer/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    headerTitleView: {alignSelf: 'center', alignItems: 'center', flexDirection: 'row'},
    headerTitleImage: {width: 30, height: 30, marginRight: 5},
    headerTitleText: {fontSize: 20, lineHeight: 30, fontWeight: 'bold'},
    headerLeft: {width: 80},
    headerRight: {width: 80, height: 50},
    menuBg: {backgroundColor: '#ffffff'},
    btnMenuRow: {flexDirection: 'row', paddingHorizontal: 5},
    menuBtn: {flex: 1},
    btnView: {margin: 5, paddingVertical: 10, borderWidth: 1, borderColor: '#dcdcdc', borderRadius: 5},
    btnImage: {width: 70, height: 70, resizeMode: 'contain', alignSelf: 'center'},
    btnText: {alignSelf: 'center', marginTop: 5, fontSize: 18, color: '#333333'}
})