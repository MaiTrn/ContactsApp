import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class SettingsScreen extends React.Component {
    

    render() {
        return (
            <View style={styles.container}>
                <Text>Settings coming soon!</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Log out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    buttonText: {
        color: '#BA2020',
        fontSize: 18,
    },

    button: {
        margin: 10,
    }
})