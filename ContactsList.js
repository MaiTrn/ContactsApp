import React from 'react'
import { SectionList, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const ContactsList = props => {
    const renderItem = obj => <Row {...obj.item} onPress={props.onSelectContact} />

    const renderSectionHeader = obj => <Text style={styles.title}>{obj.section.title}</Text>

    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact]
        }
    }, {}) //the second {} is the initial object array

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter],
    }))

    return (
        <SectionList 
            renderItem = {renderItem}
            renderSectionHeader = {renderSectionHeader}
            sections = {sections}
        />)
}

ContactsList.propTypes = {
    contacts: PropTypes.array,
}

const styles= StyleSheet.create ({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})



export default ContactsList