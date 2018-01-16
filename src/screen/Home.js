import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';

import Notification from '../components/Notification';
import Slide from '../components/Slide';
import LanguageSelect from "../components/LanguageSelect";
import Footer from '../components/Footer';

export default class HomeScreen extends Component {
    static navigationOptions = () => ({
        headerTitle: (<View style={styles.headerTitleView}>
            <Image style={styles.headerTitleImage} source={require('../assets/images/hklogo.png')}/>
            <Text style={styles.headerTitleText}>香港航空</Text>
        </View>),
        headerLeft: (<View style={styles.headerLeft}></View>),
        headerRight: (<ImageBackground style={styles.headerRight}
                                       source={require('../assets/images/logoIco.png')}></ImageBackground>)
    });

    menuBtnPress(navigationName) {
        this.props.navigation.navigate(navigationName);
    }

    render() {
        return (
            <ScrollView>
                <Notification/>
                <Slide/>
                <View style={styles.menuBg}>
                    <View style={styles.btnMenuRow}>
                        <MenuBtn text={'机票预定'} sourceChecked={require('../assets/images/jpydImgCurr.png')}
                                 source={require('../assets/images/jpydImg.png')}/>
                        <MenuBtn text={'年票预订'} onPress={() => {
                            this.menuBtnPress('AnnualPassList')
                        }}
                                 sourceChecked={require('../assets/images/npydImgCurr.png')}
                                 source={require('../assets/images/npydImg.png')}/>
                    </View>
                    <View style={styles.btnMenuRow}>
                        <MenuBtn text={'预办登机'} sourceChecked={require('../assets/images/zjImgCurr.png')}
                                 source={require('../assets/images/zjImg.png')}/>
                        <MenuBtn text={'航班动态'} sourceChecked={require('../assets/images/hbdtImgCurr.png')}
                                 source={require('../assets/images/hbdtImg.png')}/>
                    </View>
                    <View style={styles.btnMenuRow}>
                        <MenuBtn text={'金鹏会员'} sourceChecked={require('../assets/images/icon_home_jinpeng_white.png')}
                                 source={require('../assets/images/icon_home_jinpeng_red.png')}/>
                        <MenuBtn text={'我的行程'} sourceChecked={require('../assets/images/userWhiteImg.png')}
                                 source={require('../assets/images/userImg.png')}/>
                    </View>
                    <View style={styles.btnMenuRow}>
                        <MenuBtn text={'港航资讯'} sourceChecked={require('../assets/images/ghzxImgCurr.png')}
                                 source={require('../assets/images/ghzxImg.png')}/>
                        <MenuBtn text={'设置'} sourceChecked={require('../assets/images/setImgCurr.png')}
                                 source={require('../assets/images/setImg.png')}/>
                    </View>
                </View>
                <LanguageSelect/>
                <Footer/>
            </ScrollView>
        );
    }
}

/* 导航菜单按钮组件 */
class MenuBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {isCheck: false};

        this.onPress = this.onPress.bind(this);
        this.onPressIn = this.onPressIn.bind(this);
        this.onPressOut = this.onPressOut.bind(this);
    }

    onPress() {
        this.props.onPress && this.props.onPress();
    }

    onPressIn() {
        this.setState({isCheck: true});
    }

    onPressOut() {
        this.setState({isCheck: false});
    }

    render() {
        return (
            <TouchableWithoutFeedback
                style={styles.menuBtn}
                activeOpacity={1}
                onPress={this.onPress}
                onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
                <View style={[styles.btnView, this.state.isCheck ? styles.btnBgColorRed : styles.btnBgColorWhite]}>
                    <Image style={[styles.btnImage, this.state.isCheck ? styles.btnImageShow : styles.btnImageHide]}
                           source={this.props.sourceChecked}></Image>
                    <Image style={[styles.btnImage, , this.state.isCheck ? styles.btnImageHide : styles.btnImageShow]}
                           source={this.props.source}></Image>
                    <Text
                        style={[styles.btnText, this.state.isCheck ? styles.textColorWhite : styles.textColorBlack]}>{this.props.text ? this.props.text : ''}</Text>
                </View>
            </TouchableWithoutFeedback>
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
    menuBtn: {},
    btnView: {flex: 1, margin: 5, paddingVertical: 10, borderWidth: 1, borderColor: '#dcdcdc', borderRadius: 5},
    btnBgColorWhite: {backgroundColor: '#ffffff'},
    btnBgColorRed: {backgroundColor: '#dd0101'},
    btnImage: {resizeMode: 'contain', alignSelf: 'center'},
    btnImageShow: {width: 70, height: 70},
    btnImageHide: {width: 0, height: 0},
    btnText: {alignSelf: 'center', marginTop: 5, fontSize: 18},
    textColorBlack: {color: '#333333'},
    textColorWhite: {color: '#ffffff'}
})