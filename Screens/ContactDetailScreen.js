import React from 'react'
import { TouchableOpacity, Text, View , StyleSheet} from 'react-native'

export default class contactDetailScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> {this.props.route.params.phone} </Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Main')}}>
                    <Text style={styles.buttonText}>Go back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 15,
        margin: 5,
    },

    buttonText: {
        color: '#BA2020',
        margin: 5,
        fontSize: 18,
    }

})