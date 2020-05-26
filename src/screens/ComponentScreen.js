import React from 'react'
import {Text, StyleSheet} from 'react-native'

const ComponentScreen = () => {
    return <Text style={styles.textStyle}>This is the components screena</Text>

};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20
    }
});

export default ComponentScreen;