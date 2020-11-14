import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';

const BellIconWithbadge = (props) => {
    return(
        <View>
            <Icon name='bell' type='font-awesome' color='#696969' size={25}
            onPress={() => props.navigation.navigate('notification')} />
            <Badge value = '1' containerStyle= {{position: 'absolute', top:-4, right: -4}}/>
        </View>
    )
}

const MyHeader = props => {
    return (
        <Header
            leftComponent={<Icon name='bars' type='font-awesome' color='#696569'
                onPress={() =>
                    props.navigation.toggleDrawer()
                } />}
            centerComponent={{ text: props.title, style: { color: '#90A589', fontSize: 20, fontWeight: "bold" } }}
            rightComponent={ <BellIconWithbadge{...props}/> }
            backgroundColor='#EAF8FE' />
    );
}

export default MyHeader;