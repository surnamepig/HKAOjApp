import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
TouchableOpacity
} from 'react-native';
import HeaderToBack from '../components/HeaderToBack';
const width = Dimensions.get('window').width;

export default class AnnualPassIntroduceScreen extends Component {
    static navigationOptions = (navigation) => ({
        headerTitle: '年票介绍',
        headerLeft: (<View><HeaderToBack {...navigation}/></View>),
        headerRight: (
            <TouchableOpacity style={styles.headerIntroduceBtn} activeOpacity={0.6} >
                <Text style={[styles.fontColorRed, styles.fontSize18]}></Text></TouchableOpacity>)
    });

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Image resizeMode='contain' style={styles.image}
                           source={require('../assets/images/annual_intro_top_cn.jpg')}/>
                    <Text style={styles.text}>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        如果您需要经常来往亚洲各大城市，香港航空年票（Airpass）是您最佳的选择。只需成为金鹏俱乐部会员即可选购香港、台北、中国内地、东京、大阪及曼谷的3套或5套的往返年票产品，套数越多价格越优惠，还有经济舱和商务舱任您选择！免费更改航班日期，为您提供更多舒适、灵活的出行选择。
                    </Text>
                    <Text style={styles.text}>★ SkyTrax四星级优质服务</Text>
                    <Text style={styles.text}>★ 弹性更改航班日期</Text>
                    <Text style={styles.text}>★ 年票价格更优惠</Text>
                    <Text style={styles.item}>立即抢购！</Text>
                    <Text style={styles.listTitle}>年票使用手册</Text>
                </View>
                <View style={styles.options}>
                    <Text style={styles.itemTitle}>1.进入年票预订，生成订单</Text>
                    <Image resizeMode='contain' style={styles.itemImage}
                           source={require('../assets/images/annual1.jpg')}/>
                    <Text style={styles.itemTitle}>2.登录会员，查看年票订单</Text>
                    <Image resizeMode='contain' style={styles.itemImage}
                           source={require('../assets/images/annual2.jpg')}/>
                    <Text style={styles.itemTitle}>3.进入年票订单详情，开启年票之旅</Text>
                    <Image resizeMode='contain' style={styles.itemImage}
                           source={require('../assets/images/annual3.jpg')}/>
                </View>
            </ScrollView>
        );
    }
}

var height = 96 * width / 64
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc'
    },
    header: {
        flexDirection: 'row-reverse',
        height: 50,
        textAlign: 'center',
        width: width,
        borderBottomWidth: 1,
        borderColor: '#b7b6ba',
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 20,
        lineHeight: 50,
        fontWeight: '600',
    },
    content: {
        width: width
    },
    image: {
        width: width,
        height: 130
    },
    itemImage: {
        width: '100%',
        height: height
    },
    text: {
        color: '#666',
        padding: 10,
        fontWeight: '600'
    },
    item: {
        padding: 15,
        color: '#666'
    },
    listTitle: {
        fontSize: 22,
        fontWeight: '600',
        width: width,
        textAlign: 'center',
        height: 70
    },
    itemTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: '600'
    },
    options: {
        width: width,
        padding: 15,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 80
    },
    option: {
        width: '90%',
        marginBottom: 180
    }
});