import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';

import HeaderToBack from '../components/HeaderToBack';

export default class AnnualPassListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            annualPassList: [
                {
                    from: '香港',
                    to: '温哥华',
                    items: [
                        {
                            amount: '3',
                            list: [
                                {type: '往返', classType: '商务舱', currency: 'HKD', price: '64905'}
                            ]
                        },
                        {
                            amount: '5',
                            list: [
                                {type: '往返', classType: '经济舱', currency: 'HKD', price: '33075'}
                            ]
                        }
                    ]
                },
                {
                    from: '温哥华',
                    to: '香港',
                    items: [
                        {
                            amount: '3',
                            list: [
                                {type: '往返', classType: '商务舱', currency: 'CAD', price: '10365'}
                            ]
                        },
                        {
                            amount: '5',
                            list: [
                                {type: '往返', classType: '经济舱', currency: 'CAD', price: '6007'}
                            ]
                        }
                    ]
                },
                {
                    from: '香港',
                    to: '东京',
                    items: [
                        {
                            amount: '3',
                            list: [
                                {type: '往返', classType: '经济舱', currency: 'HKD', price: '8367'},
                                {type: '往返', classType: '商务舱', currency: 'HKD', price: '14727'}
                            ]
                        },
                        {
                            amount: '5',
                            list: [
                                {type: '往返', classType: '经济舱', currency: 'HKD', price: '12695'},
                                {type: '往返', classType: '商务舱', currency: 'HKD', price: '22545'}
                            ]
                        }
                    ]
                },
                {
                    from: '香港',
                    to: '大阪',
                    items: [
                        {
                            amount: '3',
                            list: [
                                {type: '往返', classType: '经济舱', currency: 'HKD', price: '8007'},
                                {type: '往返', classType: '商务舱', currency: 'HKD', price: '14817'}
                            ]
                        },
                        {
                            amount: '5',
                            list: [
                                {type: '往返', classType: '经济舱', currency: 'HKD', price: '11617'},
                                {type: '往返', classType: '商务舱', currency: 'HKD', price: '22695'}
                            ]
                        }
                    ]
                },
                {
                    from: '香港',
                    to: '台北',
                    items: [
                        {
                            amount: '3',
                            list: [
                                {type: '往返', classType: '经济舱', currency: 'HKD', price: '4668'},
                                {type: '往返', classType: '商务舱', currency: 'HKD', price: '7338'}
                            ]
                        },
                        {
                            amount: '5',
                            list: [
                                {type: '往返', classType: '经济舱', currency: 'HKD', price: '6780'},
                                {type: '往返', classType: '商务舱', currency: 'HKD', price: '10680'}
                            ]
                        }
                    ]
                },
                {
                    from: '香港',
                    to: '北京',
                    items: [
                        {
                            amount: '3',
                            list: [
                                {type: '往返', classType: '经济舱', currency: 'HKD', price: '8286'},
                                {type: '往返', classType: '商务舱', currency: 'HKD', price: '22296'}
                            ]
                        },
                        {
                            amount: '5',
                            list: [
                                {type: '往返', classType: '经济舱', currency: 'HKD', price: '10586'},
                                {type: '往返', classType: '商务舱', currency: 'HKD', price: '30796'}
                            ]
                        }
                    ]
                }
            ]
        };
    }

    static navigationOptions = (navigation) => ({
        headerTitle: '年票预订',
        headerLeft: (<View><HeaderToBack {...navigation}/></View>),
        headerRight: (
            <TouchableOpacity style={styles.headerIntroduceBtn} activeOpacity={0.6} onPress={() => {
                navigation.navigation.navigate('AnnualPassIntroduce');
            }}><Text style={[styles.fontColorRed, styles.fontSize18]}>年票介绍</Text></TouchableOpacity>)
    });

    render() {
        return (
            <View style={styles.bgColor}>
                <View style={styles.describe}><Text>票价包括所有税项/收费/费用及航空公司附加费。</Text></View>
                <ScrollView>
                    <View style={styles.listContent}>
                        {
                            this.state.annualPassList.map((item, index) => {
                                return (
                                    <AnnualPassListItem {...this.props} key={index} item={item}/>
                                );
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

/* 年票列表项组件 */
class AnnualPassListItem extends Component {
    constructor(props) {
        super(props);

        this.bookOnPress = this.bookOnPress.bind(this);
    }

    bookOnPress() {
        this.props.navigation.navigate('AnnualPassTerms');
    }

    render() {
        var data = this.props.item;
        return (
            <View style={styles.listItem}>
                <View style={styles.listItemTitle}>
                    <Text style={styles.fontSize18}>{data.from + ' - ' + data.to}</Text>
                </View>
                {
                    data.items.map((item, index) => {
                        return (
                            <View key={index} style={[styles.listItemSub, index != 0 ? styles.lineBetween : null]}>
                                <View style={styles.itemSubLeft}>
                                    <Text
                                        style={[styles.fontSize21, styles.fontWeight, styles.fontColorRed]}>{item.amount}</Text>
                                    <Text style={styles.marginLeft3}>张</Text>
                                </View>
                                <View style={styles.itemSubRight}>
                                    {
                                        item.list.map((list, index) => {
                                            return (
                                                <View key={index} style={styles.subRightList}>
                                                    <View style={styles.type}>
                                                        <Text style={styles.fontSize16}>{list.type}</Text>
                                                    </View>
                                                    <View style={styles.classType}>
                                                        <Text style={styles.fontSize16}>{list.classType}</Text>
                                                    </View>
                                                    <View style={styles.currency}>
                                                        <Text style={styles.fontSize16}>{list.currency}</Text>
                                                    </View>
                                                    <View style={styles.price}>
                                                        <Text
                                                            style={[styles.fontSize16, styles.fontColorRed]}>{list.price}</Text>
                                                    </View>
                                                    <View style={styles.booking}>
                                                        <TouchableOpacity style={styles.bookBtn} activeOpacity={0.6}
                                                                          onPress={this.bookOnPress}>
                                                            <Text
                                                                style={[styles.fontColorWhite, styles.fontSize16]}>预订</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            );
                                        })
                                    }
                                </View>
                            </View>
                        );
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerIntroduceBtn: {
        marginRight: 10,
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: '#f02828',
        borderRadius: 5
    },
    bgColor: {backgroundColor: '#ffffff'},
    describe: {paddingVertical: 5, paddingHorizontal: 8},
    listContent: {marginHorizontal: 20},
    listItem: {marginBottom: 12, borderWidth: 1, borderColor: '#b3b3b3', borderRadius: 5},
    listItemTitle: {alignSelf: 'center', paddingTop: 3},
    listItemSub: {flexDirection: 'row', paddingVertical: 10},
    itemSubLeft: {flex: 12, flexDirection: 'row', paddingLeft: 5, alignItems: 'center'},
    itemSubRight: {flex: 88, flexDirection: 'column'},
    subRightList: {flexDirection: 'row', paddingVertical: 5,},
    type: {flex: 15, justifyContent: 'center'},
    classType: {flex: 18, justifyContent: 'center'},
    currency: {flex: 10, justifyContent: 'center'},
    price: {flex: 32, justifyContent: 'center'},
    booking: {flex: 20, justifyContent: 'center'},
    bookBtn: {
        width: 45,
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f02828',
        borderRadius: 5
    },
    lineBetween: {borderTopWidth: 1, borderTopColor: '#b3b3b3'},
    marginLeft3: {marginLeft: 3, marginTop: 3},
    fontSize14: {fontSize: 14},
    fontSize16: {fontSize: 16},
    fontSize18: {fontSize: 18},
    fontSize21: {fontSize: 21},
    fontColorRed: {color: '#f02828'},
    fontColorWhite: {color: '#ffffff'},
    fontWeight: {fontWeight: 'bold'}
});