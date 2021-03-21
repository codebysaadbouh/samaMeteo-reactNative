import React from 'react' 
import { TextInput, StyleSheet, View } from 'react-native'

export default class Search extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            city: 'Dakar'
        }
    }
    setCity(city) {
        this.setState({city})
    }
    render () {
        return(
            <View style={styles.InputDisposition}>
                <TextInput style={styles.InputCharte}
                value={this.state.city}
                onChangeText={(text) => this.setCity(text)}
                />
            </View>
        )
    }    
}

const styles = StyleSheet.create({
    InputCharte: {
        width: 380,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#d4e6e7',
        borderRadius: 100,
        shadowColor: "#0d75ac",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 3,
    },
    InputDisposition: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

