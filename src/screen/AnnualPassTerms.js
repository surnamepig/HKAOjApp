import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Image,
    ScrollView
} from 'react-native';

export default class AnnualPassTermsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkState: false,
            buttonClass:'button',
            textClass: 'buttonText'
        };
    }

    render() {
        let imgSource = this.state.checkState == true
            ? require('../assets/images/checked.png') : require('../assets/images/check.png');
        return (
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>1. 有效期: 订购日起一年内</Text>
                    <Text style={styles.text}>2. 机票最短/最长停留期：当日往返/6个月</Text>
                    <Text style={styles.text}>3. 改期: 免费</Text>
                    <Text style={styles.text}>4. 退票: 全部未使用年票可退款，需收取HKD1200 </Text>
                    <Text style={styles.text}>5. 误机: 旅客必须于航班起飞前最少2小时改期,变更或取消航班，否则每次将收取误机费HKD1200 </Text>
                    <Text style={styles.text}>6. 舱位: 经济舱 L;商务舱 D </Text>
                    <Text style={styles.text}>7.
                        3张年票产品，最多可供指定的2位乘客使用，5张年票产品，最多可供指定的3位乘客使用；购买时须确定指定乘客姓名及其分配的张数，一旦订单确定，乘客人数不可增加/减少，姓名及其分配的机票张数不可更改</Text>
                    <Text style={styles.text}>8. 票价可能会以交易当时之汇率而变更；</Text>
                    <Text style={styles.text}>9.
                        请浏览http://www.hongkongairlines.com/pdf/2018AirpassTermsAndConditionsSC.pdf参阅详细条款细则</Text>
                </View>
                <View style={styles.check}>
                    <View style={styles.checkNav}>
                        <TouchableWithoutFeedback style={styles.button}
                                                  onPress={() => {
                                                      this.setState({checkState: this.state.checkState == true ? false : true})
                                                  }}
                        >
                            <Image style={styles.checkImg} resizeMode='contain'
                                   source={imgSource}/>
                        </TouchableWithoutFeedback>
                        <Text style={styles.checkText}>*我已阅读并同意以上条款规则 </Text>
                    </View>
                    <View>
                    <View style={styles.buttonNav}>
                        <TouchableWithoutFeedback style={styles.buttonTouch}
                                                  onPressIn={() => {
                                                      this.setState({buttonClass:'buttonActive',textClass:'buttonTextActive'});
                                                  }}
                                                  onPressOut={() => {
                                                      this.setState({buttonClass:'button',textClass:'buttonText'});
                                                  }}
                        >
                            <View style={styles[this.state.buttonClass]}>
                                <Text style={styles[this.state.textClass]}>确定</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 12
    },
    text: {
        marginBottom: 16,
        fontSize: 16,
        color: '#333',
        fontFamily: 'helvetica'
    },
    check: {
        borderTopColor: '#b3b3b3',
        borderTopWidth: 1
    },
    checkNav: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingLeft: 12
    },
    checkImg: {
        width: 22,
        height: 22
    },
    checkText: {
        fontSize: 14,
        color: '#333',
        paddingLeft: 5
    },
    buttonNav: {
        height: 180,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonTouch:{
        height: 50
    },
    button: {
        height: 50,
        width: '94%',
        borderWidth: 1,
        borderColor: '#f02828',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    buttonActive:{
        height: 50,
        width: '94%',
        borderWidth: 1,
        borderColor: '#f02828',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#f02828'
    },
    buttonText: {
        color: '#f02828',
        fontSize: 16
    },
    buttonTextActive: {
        color: '#fff',
        fontSize: 16
    }
});
