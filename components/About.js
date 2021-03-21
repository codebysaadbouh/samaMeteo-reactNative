import React from 'react'; 
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default class About extends React.Component {
    render () {
        return (
            <View style={styles.view}>
                <StatusBar barStyle="light-content" backgroundColor="#0d75ac"/>
                <Text style={styles.title}>
                    SAMA METEO &reg;
                </Text>
                <Text style={styles.Apropos}>
                As part of my training in React Native, I'm making this weather application!
                </Text>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:20
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    },
    Apropos: {
        textAlign: 'justify'
    }
})